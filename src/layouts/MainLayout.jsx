import React from 'react'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'

const MainLayout = ({children}) => {
  return (
  <>
  <NavBarComponent/> 
   {children}
    
    </>
  )
}

export default MainLayout