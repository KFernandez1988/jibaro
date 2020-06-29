import React from 'react';


import H2 from '../typepography/headingTwo'


const input = (props) => {

    const {name, icon, label} = props
    return (
        <div>
            <label style={ styles.label }>
              <H2 text={label} textColor={'#34463E'} />
            </label>
            <div style={styles.div}> 
              <div style={styles.icon}>
                {icon}
              </div>
               <input style={styles.input}  name={name} id={name} type='text' />
            </div>
        </div>
    );
}

const styles = {
    div: {
        border: '#34463E solid 3px',
        borderRadius: '6px',
        width: '280px',
        height: '40px',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#fff'
       },
    input : {
        width: '85%',
        border: 'none',
        borderRadius: '6px'
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
