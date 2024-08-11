import React from 'react'
import Products from '../Products/Products'

function Category() {
  return (
    <div>
      <h2 className='mb-8 text-2xl font-semibold text-center'>Category Title</h2>
      <Products innerPage={true}/>
    </div>
  )
}

export default Category