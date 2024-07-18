import React from 'react'

import { useParams } from 'react-router-dom';
import { useProductsByCategory } from '../hooks/useProductsByCategory'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Category = () => {
  const {id} = useParams();

  const { product } = useProductsByCategory(id);
  return (
   <ItemDetailContainer product={product}/>
  )
}

export default Category


