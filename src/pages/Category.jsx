import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom';
import { useProductsByCategory } from '../hooks/useProductsByCategory'


const Category = () => {
  const {id} = useParams();

  const { products } = useProductsByCategory(id);
  return (
   <ItemDetailContainer products={products}/>
  )
}

export default Category
