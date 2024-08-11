
function NewsLetter() {
  return (
    <div className="p-10 bg-gray-100 flex items-center justify-center flex-col ">
      
<h3 className='text-xl font-semibold text-gray-500 uppercase mb-2'>Newsletter</h3>
<h2 className='uppercase text-2xl mb-5  '>Sign Up For Latest Updates and Offers</h2>
<div className='flex'>

<input type='email' className='w-[20rem] border-0 p-3 rounded-md'  />
<button className='bg-yellow-300 rounded-md pl-3 pr-3'>Subscribe</button>
</div>


    </div>
  )
}

export default NewsLetter
