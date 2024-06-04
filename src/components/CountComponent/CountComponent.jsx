import React from 'react'
import { Button } from 'react-bootstrap'
const CountComponent = () => {
  
    const [item, setItem] = React.useState(0);

    const handleAddButton = () => {
        setItem(item +1);
    };
    const handleRemoveButton = () => {
        setItem(item-1)
    };
  React.useEffect(() => {})
  
    return (
    <React.Fragment>
     <Button variant='primary' onClick={handleRemoveButton}>-</Button>
    <span>0</span>
    <Button variant='primary' onClick={handleAddButton}>+</Button>

    </React.Fragment>
  )
}

export default CountComponent
