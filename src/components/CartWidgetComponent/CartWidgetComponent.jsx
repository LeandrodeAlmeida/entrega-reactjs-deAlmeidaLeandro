
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidgetComponent = () => {
  return (
    <><FontAwesomeIcon icon={faCartShopping} />
    <span>0</span>
  
    </>
  )
}

export default CartWidgetComponent
