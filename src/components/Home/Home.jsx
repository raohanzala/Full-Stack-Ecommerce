
import CategoryList from './CategoryList/CategoryList'
import Hero from './Hero/Hero'
import Products from './../Products/Products'
import { useEffect } from 'react'
import { fetchDataFromApi } from '../../utils/api'

function Home() {

  useEffect(()=> {
    getCategories()
  })

  const getCategories = ()=> {
    fetchDataFromApi('/api/categories').then((res)=> console.log(res))
  }

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
