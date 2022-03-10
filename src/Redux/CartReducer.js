import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
 const initialState={
     cartItems:[],
     cartTotalAmount:0,
     cartQuantity:0,
    };

const CartReducer = createSlice({
    name:"cartReducer",
    initialState,
    reducers:{
        addItem:(state, action)=>{
            const ifAddedItemExsited =state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(ifAddedItemExsited >= 0){
                state.cartItems[ifAddedItemExsited].cartQuantity +=1;
                console.log("item existed:");
                toast.info(`${action.payload.title} increased to cart`,{position:"bottom-left"})
            }else{
                const product={...action.payload,cartQuantity:1};
                console.log("item added: ", action.payload);
                state.cartItems.push(product);
                toast.success(`${action.payload.title} added  to cart`,{position:"bottom-left"})

            }

            state.cartTotalAmount++;
            
        },
        deleteItem:(state,action)=>{
            console.log(state);
            const deletedItemIndex=state.cartItems.findIndex((item)=>item.id === action.payload.id);
            console.log(deletedItemIndex,state.cartQuantity,state.cartItems[deletedItemIndex].cartQuantity);
            state.cartTotalAmount -=state.cartItems[deletedItemIndex].cartQuantity;
            state.cartItems.splice(deletedItemIndex,1);
            toast.info(` ${action.payload.title} removed from cart`,{position:"bottom-left"});

        },
        decreaseItem: (state, action) => {
            const itemIndex =state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity === 1){
                const newCartItems= state.cartItems.filter((item)=> item.id !== action.payload.id);
                state.cartItems=newCartItems;

                toast.error(` ${action.payload.title} removed from cart`,{position:"bottom-left"})

            }else if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1;
                state.cartTotalAmount--;

                toast.info(`Decreasecd ${action.payload.title} from cart`,{position:"bottom-left"})

            }
            
        },
        clearCart:(state,action)=>{
            state.cartItems=[];
            state.cartTotalAmount=0;
            toast.error("Cart cleared",{position:"bottom-left"})


        }
    }
});

export const {addItem ,deleteItem,decreaseItem ,clearCart}=CartReducer.actions;
export default CartReducer.reducer;