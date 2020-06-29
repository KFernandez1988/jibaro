import React from 'react';
import './InputSearch.css';

// search component
const input = (props) => {

    const {name, icon, action, size} = props
    return (
        
            <div style={styles.div(size)}>   
               <input 
                className='input'
                style={styles.input}  
                name={name} id={name} 
                type='text'
                onChange={(event) => action(event, event.target.value )} />
               <div style={styles.icon}>
                {icon}
              </div>
            </div>
    
    );
}

const styles = {
    div:(responsiveSize) => ({
        border: '#34463E solid 3px',
        borderRadius: '6px',
        width: responsiveSize? responsiveSize : '380px',
        height: '40px',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#A4C3B2'
       }),
    input : {
        width: '85%',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#A4C3B2'
    },
    icon: {
        padding: '0',
        margin: '5px',
        alignSelf: 'center',
        display: 'flex'
    }, 
    label : {
        margin: '0',
        padding: '0'
    }
    
}

export default input;
