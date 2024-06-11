import React from "react";

const useProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return { products };
};

export default useProducts;
