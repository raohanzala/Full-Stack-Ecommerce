import {  Link, useNavigate } from "react-router-dom";
import { IoMdCart, IoMdSearch } from "react-icons/io";

function NavBar({setShowCart, setSearchModal}) {

  const navigate = useNavigate()
  // const navLinks = ['Home', 'About', "Men's", "Women's"]
  return (
    <>
    <nav className="h-[40%] bg-slate-200 flex items-center justify-between shadow-sm pl-10 pr-10">
      <ul className="flex items-center justify-center gap-5">
      <Link to='/' >Home</Link >
      <Link to='/men' >Men</Link >
      <Link to='/women' >Women</Link >
      <Link to='/brands' >Brands</Link >
      <Link to='/contact' >Contact Us</Link >
      </ul>

      <div className="flex items-center">
        <span onClick={()=> setSearchModal(true)}>

      <IoMdSearch className="text-2xl cursor-pointer" />
        </span>
        <span onClick={()=> setShowCart(true)}>

      <IoMdCart className="text-2xl cursor-pointer" />
        </span>
      </div>
    </nav>
    </>
  )
}

export default NavBar
