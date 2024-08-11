import React from 'react'
import PrdctImg from '../../../assets/hero-1.jfif'

function Product() {
  return (
    <div className='w-full'>
          <div>BEST SELLING</div>

          <div className="w-full h-[10rem] object-cover">
            <img src={PrdctImg} className='w-full h-full' alt=""/>
          </div>
          <div className="">

            <div className="text-lg text-gray-600 ">Men Watch</div>
            <div className="product-name">Armani Exchange Women’s Quartz Grey Leather Strap Gold Dial 35mm Watch AX5237/B
            </div>
            <div className="product-price">
              RS 7,650</div>
          </div>
        </div>
  )
}

export default Product