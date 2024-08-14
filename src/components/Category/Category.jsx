import {useParams} from 'react-router-dom'
import Products from '../Products/Products'
import useFetch from '../../hooks/useFetch'

function Category() {

  const {id} = useParams()

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  return (
    <div>
      <h2 className='mb-8 text-2xl font-semibold text-center'>{data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title}</h2>
      <Products innerPage={true} products={data}/>
    </div>
  )
}

export default Category