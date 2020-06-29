import React from 'react'


import Input from '../../atoms/formfields/inputSearch/inputSearch'
import MG  from '../../atoms/icons/magnifiedGlass'
 const searchBar = (props) => {
  

    // unique input for the search website
  const { action, size } = props
    return (
        <div>
            <Input 
            icon={ 
                <button style={ styles.button() }>
                <MG /> 
                </button>}
            size={size}
            action={ action } />
        </div>
    )
}

const styles = {
    button: () => ({
         background:  '#A4C3B2',
         border: 'none', 

    })
}

export default searchBar
