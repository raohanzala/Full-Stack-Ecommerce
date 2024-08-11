import Product from './Product/Product'


function Products({innerPage, headingText}) {
  return (
    <div className='pb-9 pt-9'>

    {!innerPage && <h2 className='mb-8 text-2xl font-semibold text-center'>{headingText}</h2>}
    <div className='grid grid-cols-4 gap-5'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
    </div>
  )
}

export default Products
