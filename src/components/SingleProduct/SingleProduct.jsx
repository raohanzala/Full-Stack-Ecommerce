import { BsWhatsapp } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import PrcdtImg from "../../assets/hero-1.jfif";
import RelatedProduct from './RealatedProduct/RealtedProduct'
import {  useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch'
import { useState } from "react";

function SingleProduct() {


  const [quantity, setQuantity] = useState('')

  const {id} = useParams()
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

  if(!data) return
  const product = data.data[0].attributes

  return (
    <div className="max-w-[1180px] m-auto">
      <div className="grid gap-32" style={{ gridTemplateColumns: "1.2fr 2fr" }}>
        <div className="bg-yellow-300">
          <div className="w-full h-[24rem] mb-8">
            <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="Product Image" className="w-full h-full" />
          </div>
          <div className="flex gap-3 justify-between">
            <img className="w-[5rem] h-[5rem]" src={PrcdtImg} alt="" />
            <img className="w-[5rem] h-[5rem]" src={PrcdtImg} alt="" />
            <img className="w-[5rem] h-[5rem]" src={PrcdtImg} alt="" />
            <img className="w-[5rem] h-[5rem]" src={PrcdtImg} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="border-b-2">
            <h3 className="text-lg font-semibold mb-7">{product.title}</h3>
            <div className="flex mb-5">
              <span className="text-sm text-gray-400">$120</span>
              <p className="text-red-400 text-lg">{product.price}</p>
            </div>
            <p className="text-lg mb-8">
              {product.desc}
            </p>

            <span className='font-semibold'>Category : {product.categories.data[0].attributes.title}</span>
          </div>

          <div>

          </div>
        </div>
      </div>
      <RelatedProduct/>
    </div>
  );
}

export default SingleProduct;
