import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryLeft = () => {
  return (
    <div className="col-md-7">
      <div className="left_block">
      <h1>Search across all Caribbean Island</h1>
      <h2>Businesses</h2>
      <div className="location_based_search">
       <div className="location_div">
       <button className="btn_location">Location based Business</button>
       </div>
       <div className="search_div">
          <input type="text" placeholder="What are you looking for?"/>
       </div>
      </div>
      <div className="category_section">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
    
        <div className="category_card">
          <img className="card_icon" src="images/menu-bar.png"/>
          <h5 className="card_title">More Category</h5>
        </div>
      </div>
    </div>
     </div>
  )
}

export default CategoryLeft