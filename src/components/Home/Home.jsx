
import CategoryList from './CategoryList/CategoryList'
import Hero from './Hero/Hero'
import Products from './../Products/Products'
import { useContext, useEffect } from 'react'
import { fetchDataFromApi } from '../../utils/api'
import { Context } from '../../utils/context'

function Home() {

  const {setCategories, setProducts, categories, products} = useContext(Context)

  useEffect(()=> {
    getProducts()
    getCategories()

  },[])

  const getProducts = ()=> {
    fetchDataFromApi('/api/categories?populate=*').then((res)=> {
      console.log(res)
      setProducts(res)

    })
  }
  
  const getCategories = ()=> {
    fetchDataFromApi('/api/categories?populate=*').then((res)=> {
      console.log(res)
      setCategories(res)

    })
  }

  return (
    <div>
      <Hero/>
      <main className='max-w-[1180px] m-auto items-center'>
      <CategoryList categories={categories} />
      <Products products={products} headingText='Popular Products'/>
      </main>
    </div>
  )
}

export default Home
