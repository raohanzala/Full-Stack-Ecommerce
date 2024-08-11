import Logo from "./Logo"

function HeaderSub() {
  return (
    <div className="w-full h-[60%] bg-slate-500 flex items-center pt-2 pr-8 pl-8 justify-between border-b-2 border-black">
      <a href="#" className="call">
        <i className="bi bi-telephone"></i>
        <div className="call-detail">
          CALL US :
          <p>+92-3249221933</p>
        </div>
      </a>

      <Logo/>

      <a href="#" className="call">
        <i className="bi bi-telephone"></i>
        <div className="call-detail">
          CALL US :
          <p>+92-3249221933</p>
        </div>
      </a>
    </div>
  )
}

export default HeaderSub
