import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductsByCategory } from '../hooks/useProductsByCategory';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import './Category.css'; 

const Category = () => {
  const { id } = useParams();
  const { products, loading } = useProductsByCategory(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-container">
      <h1>Category: {id}</h1>
      {products.map(product => (
        <ItemDetailContainer key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Category;