import React from "react";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";
import MainLayout from "./layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css';



function App () { 
return (

 <MainLayout>

 <ItemListContainerComponent greeting="⚽Bienvenido a Su Camiseta⚽" />
 </MainLayout>
);
  
}

export default App
