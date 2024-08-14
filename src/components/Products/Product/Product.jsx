import React from 'react'
import { useNavigate } from 'react-router-dom'


function Product({id, data}) {

  const navigate = useNavigate()
  return (
    <div className='w-full' onClick={()=> navigate(`/product/${id}`)}>
          <div>BEST SELLING</div>

          <div className="w-full h-[10rem] object-cover">
            <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} className='w-full h-full' alt=""/>
          </div>
          <div className="">

            <div className="text-lg text-gray-600 ">{data.title}</div>
            <div className="product-name">Armani Exchange Women’s Quartz Grey Leather Strap Gold Dial 35mm Watch AX5237/B
            </div>
            <div className="product-price">{data.price}</div>
          </div>
        </div>
  )
}

export default Product