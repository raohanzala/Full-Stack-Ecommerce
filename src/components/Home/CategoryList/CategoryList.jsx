import CategoryImg1 from './../../../assets/category-img-chrono.jpeg'
import CategoryImg2 from './../../../assets/category-img-luxury.jpeg'
import CategoryImg3 from './../../../assets/category-img-luxury.jpeg'

function Category() {
  return (
    <div>

    <div className="flex justify-around flex-wrap pt-10 pb-10 gap-10">
      <div className='h-[20rem] w-[15rem]'>
        <img src={CategoryImg1} className='h-full w-full' alt="" />
      </div>
      <div className='max-h-[20rem] w-[15rem]'>
        <img src={CategoryImg1} className='h-full w-full' alt="" />
      </div>
      <div className='h-[20rem]  w-[15rem]'>
        <img src={CategoryImg1} className='h-full w-full' alt="" />
      </div>
      <div className='h-[20rem] w-[15rem]'>
        <img src={CategoryImg1} className='h-full w-full' alt="" />
      </div>
      
    </div>
    </div>
  )
}

export default Category
