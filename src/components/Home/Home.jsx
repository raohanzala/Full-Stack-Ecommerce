
import CategoryList from './CategoryList/CategoryList'
import Hero from './Hero/Hero'
import Products from './../Products/Products'

function Home() {
  return (
    <div>
      <Hero/>
      <main className='max-w-[1180px] m-auto items-center'>
      <CategoryList/>
      <Products headingText='Popular Products'/>
      </main>
    </div>
  )
}

export default Home
