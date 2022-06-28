import './App.css';
import Home from './Pages/Home';
import Products from '../src/Components/Products/Products';
import Navbar from '../src/Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import FetchedData from './Components/FetchedData/FetchedData';

function App() {
  
  return (
    <div className="App">

<Navbar />

      <Routes>
        <Route index path="/" element={ <Home />}/>
        <Route path="/products" element={<FetchedData />} />
        <Route path="/aboutus" element={<Content/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
