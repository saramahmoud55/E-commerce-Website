import './Filters.css'
import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';

export default function Filters({ loading, data }) {
  const [filteredProduct, setFilteredProduct] = useState(data);
  const [filters, setFilters] = useState({ sortByPrice: null, category: null, byPrice: null, rate: null });
  const [search, setSearch] = useState("");

  // console.log(data)
  // console.log(filters)
  // console.log(filteredProduct)


  // const filterProduct = (choosedCatergory) => {
  //   const updatedList = data.filter((item) => item.category === choosedCatergory);
  //   console.log("updatedList: ", updatedList)
  //   setFilters(updatedList);
  // }
  // const filteredProductbyPrice = (val) => {
  //   let updated;
  //   if (val === "highest") {
  //     updated = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  //     setFilters(updated);

  //   } else if (val === "lowest") {
  //     updated = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  //     setFilters(updated);

  //   }
  //   console.log("updated", updated);
  //   setFilters(updated);
  // }
  // console.log("filter", filters);

  useEffect(() => {
    let temp = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )
    // console.log("filter2",filters)
    if (filters.byPrice) {
      if (filters.byPrice === "zereToTwoHundred") {
        temp = temp.filter(
          (item) => item.price <= 200
        )
      } else if (filters.byPrice === "twoToFourHundred") {
        temp = temp.filter(
          (item) => item.price <= 400 && item.price >= 200)
      }
      else if (filters.byPrice === "fourToSixHundred") {
        temp = temp.filter(
          (item) => item.price <= 600 && item.price >= 400)
      }
      
      else if (filters.byPrice === "sixToEightHundred") {
        temp = temp.filter(
          (item) => item.price <= 800 && item.price >= 600)
      }
      else if (filters.byPrice === "EightToTenHundred") {
        temp = temp.filter(
          (item) => item.price <= 1000 && item.price >= 800)
      }

    }
    if (filters.sortByPrice) {
      console.log("sssss",filters)
      if (filters.sortByPrice === "lowest") {
        temp = temp.sort(((a, b) => parseFloat(a.price) - parseFloat(b.price)));
      } else if (filters.sortByPrice === "highest") {
        temp = temp.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
    }
    if (filters.category) {
      // console.log("filter1", filters)
      temp = temp.filter(
        (item) => item.category.toLocaleLowerCase() === filters.category.toLocaleLowerCase()
      )
    }

    if (filters.rate) {
      // console.log("filter3", filters)

      if (filters.rate === 2) {
        temp = temp.filter(
          (item) => item.rate <= 2 
        )
      } else if (filters.rate === 3) {
        temp = temp.filter(
          (item) => item.rate <= 3 && item.rate >=2
        )

      } else if (filters.rate === 4) {
        temp = temp.filter(
          (item) => item.rate <= 4 && item.rate >=3
        )
      } else {
        temp = temp.filter(
          (item) => item.rate >= 4
        )
      }
    }
  

    setFilteredProduct(temp);
  }, [search,data, filters]);

  return (
    <>
      <div >
        <div className="col-12 m-5 "  >
          <h3 className="text=center">Latest Products</h3>
          <hr />
        </div>
        <div className="col-md-3 col-sm-6 buttons d-flex justify-content-center   ">
          {/* <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>*/}

          <div>
          <input placeholder="Search" className="inbox form-check-input" value={search} type="text" onChange={(e) => setSearch(e.target.value)} />
          </div>
          {/*Category dropdown */}
          <div className="sec-center">
            <input className="dropdown " type="checkbox" id="dropdown" name="dropdown" />
            <label className="for-dropdown" htmlFor="dropdown">Category <i className="uil uil-arrow-down"></i></label>
            <div className="section-dropdown" onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}>
              {/* <input className="dropdown-sub" type="checkbox" id="dropdown-sub-all" name="dropdown-sub"  />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-all">All </label> */}
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-men" name="dropdown-sub" value="men's clothing" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-men">Men </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-women" name="dropdown-sub" value="women's clothing" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-women">Women </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-jewelery" name="dropdown-sub" value="jewelery" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-jewelery">Jewelery </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-electronics" name="dropdown-sub" value="electronics" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-electronics">Electronics </label>
            </div>
          </div>
          {/*sortbyPrice dropdown */}

          <div className="sec-center">
            <input className="dropdown" type="checkbox" id="dropdown-SortbyPrice" name="dropdownSortByPrice" />
            <label className="for-dropdown" htmlFor="dropdown-SortbyPrice">Sort by <i className="uil uil-arrow-down"></i></label>
            <div className="section-dropdown" onChange={(e) => setFilters((prev) => ({ ...prev, sortByPrice: e.target.value }))}>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-lth" name="dropdown-sub2" value="lowest" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-lth" >LOW To High </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-htl" name="dropdown-sub2" value="highest" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-htl">High To Low </label>

            </div>
          </div>
          {/*byPrice dropdown */}

          <div className="sec-center">
            <input className="dropdown" type="checkbox" id="dropdown-byPrice" name="dropdownByPrice" />
            <label className="for-dropdown" htmlFor="dropdown-byPrice">Price <i className="uil uil-arrow-down"></i></label>
            <div className="section-dropdown" onChange={(e) => setFilters((prev) => ({ ...prev, byPrice: e.target.value }))}>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-1" name="dropdown-sub3" value="zereToTwoHundred" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-1" >0 - 200$ </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-2" name="dropdown-sub3" value="twoToFourHundred" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-2">200$ - 400$  </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-3" name="dropdown-sub3" value="fourToSixHundred" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-3">400$ - 600$ </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-4" name="dropdown-sub3" value="sixToEightHundred" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-4">600$ - 800$ </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-5" name="dropdown-sub3" value="EightToTenHundred" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-5">800$ - 1000$ </label>
            </div>
          </div>
          {/*rate dropdown */}

          <div className="sec-center">
            <input className="dropdown" type="checkbox" id="dropdown-rate" name="dropdownRate" />
            <label className="for-dropdown" htmlFor="dropdown-rate">Rate <i className="uil uil-arrow-down"></i></label>
            <div className="section-dropdown" onChange={(e) => setFilters((prev) => ({ ...prev, rate: e.target.value }))}>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-rate1" name="dropdown-sub4" value="2" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-1" >2 </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-rate2" name="dropdown-sub4" value="3" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-2">3</label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-rate3" name="dropdown-sub4" value="4" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-3">4 </label>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub-rate4" name="dropdown-sub4" value="5" />
              <label className="for-dropdown-sub" htmlFor="dropdown-sub-4">5 </label>
            
            </div>
          </div>
        </div>
      </div>
      <Products loading={loading} filteredProduct={filteredProduct} />
    </>
  )
}
