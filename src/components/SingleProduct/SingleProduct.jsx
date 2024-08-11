import { BsWhatsapp } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import PrcdtImg from "../../assets/hero-1.jfif";
import RelatedProduct from './RealatedProduct/RealtedProduct'

function SingleProduct() {
  return (
    <div className="max-w-[1180px] m-auto">
      <div className="grid gap-32" style={{ gridTemplateColumns: "1.2fr 2fr" }}>
        <div className="bg-yellow-300">
          <div className="w-full h-[24rem] mb-8">
            <img src={PrcdtImg} alt="Product Image" className="w-full h-full" />
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
            <h3 className="text-lg font-semibold mb-7">Rolex Yatch Master</h3>
            <div className="flex mb-5">
              <span className="text-sm text-gray-400">$120</span>
              <p className="text-red-400 text-lg">$180</p>
            </div>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              quam id, ipsa mollitia laboriosam unde aliquam vel, pariatur nemo
              similique porro reprehenderit ea deserunt ab corrupti possimus
              dignissimos veritatis. Modi!
            </p>
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
