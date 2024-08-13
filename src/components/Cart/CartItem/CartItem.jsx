import { MdClose } from 'react-icons/md'
import Img from '../../../assets/hero-1.jfif'



function CartItem() {
  return (
    <div className='flex justify-between items-center p-5 hover:bg-black hover:bg-opacity-5'>

        <img className='w-16 h-16' src={Img} alt='Images'/>

        <div>
          <h4>Product name</h4>

          <div id='quantity' className='border-2 inline-flex items-center cursor-pointer space-x-2 pl-1 pr-1 text-sm'>
            <span className='border-r-2 pl-1 pr-1'>-</span>
            <span className='cursor-auto'>5</span>
            <span className='border-l-2 pr-2 pl-1'>+</span>
          </div>
          <div className='text-sm space-x-1'>
            <span>3</span>
            <span>x</span>
            <span>3,490</span>
          </div>

        </div>

<div className='cursor-pointer text-xl'>

          <MdClose/>
</div>
    </div>
  )
}

export default CartItem
