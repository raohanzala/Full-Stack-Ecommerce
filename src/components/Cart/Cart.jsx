import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";

function Cart({ setShowCart }) {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex justify-end z-[99]">
      <div className="bg-black opacity-35  absolute w-full h-full top-0 left-0"></div>

      <div className="w-full h-full bg-white md:w-[22rem] relative z-10 flex-col flex justify-between">
        <div className="flex justify-between p-4 border-b-2">
          <h2 className="text-lg font-semibold uppercase">Shopping Cart</h2>
          <span
            className="text-lg flex gap-1 items-center cursor-pointer uppercase "
            onClick={() => setShowCart(false)}
          >
            <MdClose />
            <span className="text"> Close</span>
          </span>
        </div>

        {/* <div className="flex flex-col items-center gap-5 mt-24">
                        <BsCartX className="text-5xl opacity-20" />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div> */}

        <div>
          <CartItem />

          <div className="flex flex-col p-5 gap-4">
            <div className="flex justify-between text-lg">
              <h3>Subtotal :</h3>
              <p>12000</p>
            </div>
            <button className="text-xl w-full bg-red-400 font-semibold p-3 uppercase" >Chekout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
