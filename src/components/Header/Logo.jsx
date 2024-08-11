import LogoImg from '../../assets/nav-logo.png'


function Logo() {
  return (
    <div className=" h-full ">
      <img src={LogoImg} className='w-[15rem] h-[4rem]' alt='realtimewrist-logo'/>
    </div>
  )
}

export default Logo
