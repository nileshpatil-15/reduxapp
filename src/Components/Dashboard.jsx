import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { SetProducts } from '../Redux/Actions';
const Dashboard = () => {
const products=useSelector((state)=>state.allProducts.products)
// const{id,category}=products[0]
console.log(products)
const dispatch=useDispatch()

const fetchData=()=>{
  const products=axios.get('https://fakestoreapi.com/products').then((response)=>{
    dispatch(SetProducts(response.data))
  }).catch(err=>{
    console.log(err)

  })
}

useEffect(()=>{

  fetchData()


},[])
  return (
    <div className='container'>

<h1 className='text-2xl font-bold'> Products</h1>

<ul className='grid grid-cols-4 gap-4'>


{
 products.map((item,index)=>{
  const {title,category,price,image,id}=item
return(
  <li key={index}>
  <Link to={`/products/${id}`}>
  <div className='border border-gray-400 rounded-lg'>
<img src={image}></img>
<p>title:{title.slice(0,10)}</p>
<p>category:{category}</p>
<p>price:{price}</p>
<button className='border border-gray-400'>Add to cart</button>
  </div>
  </Link>
 </li>
)
 }
)
}

<li className='  border  border-gray-300 rounded-lg  p-4'>


{/* <Link to={`${id}`}>
  <p>{id}</p>
</Link> */}
</li>
</ul>


    </div> 
  )
}

export default Dashboard