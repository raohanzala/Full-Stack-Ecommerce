import { MdClose } from "react-icons/md";
import img from '../../../assets/hero-2.jfif'

function Search({ setSearchModal }) {
  return (
    <div className="fixed w-full h-full z-[999] top-0 left-0 bg-white">
      <div className="flex items-center absolute w-full">
        <input
          className="w-full p-8 border-b-2 text-2xl text-center outline-none"
          type="text"
          autoFocus
          placeholder="Search For Products"
        />

        <span
          className="cursor-pointer relative right-10 text-2xl"
          onClick={() => setSearchModal(false)}
        >
          <MdClose />
        </span>
      </div>

      <div className="max-w-[680px] h-full m-auto bg-red-600 mt-32">
        <div className="w-full flex items-center gap-4 p-5 hover:bg-black hover:bg-opacity-5">

        <img className="w-20 h-20" src={img} alt="Result Images"/>
        <div>
          <h4 className="text-xl font-semibold">Product Name</h4>
          <p>Description Name</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
