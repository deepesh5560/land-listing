import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'

const Category = () => {
  return (
    <section className="business_section pt-5">
    <div className="container">
    <div className="row">
     <CategoryLeft/>
     <CategoryRight/>
    </div>
    </div>
    </section>
  )
}

export default Category