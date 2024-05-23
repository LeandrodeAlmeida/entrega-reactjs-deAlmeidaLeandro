import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
 const customStyle ={
    display: "flex",
    fontSize: "2rem",
    color: "red",
    justifyContent: "center",
    margin: "auto"
    
 };
  
    return  <div style={customStyle}>{greeting}</div>
  
};

export default ItemListContainerComponent