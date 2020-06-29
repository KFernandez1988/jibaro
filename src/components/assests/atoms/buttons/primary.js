import React from 'react';


import H3 from '../typepography/headingThree'
const primary = (props) => {
    let { onclick, text, bColor } = props
// button style and function tailor to jibaro
    onclick = onclick? onclick : ''
    return (
        <button
         onClick={onclick}
         style={ styles(bColor)}
        >
         <H3 text={text} textColor={'#F6FFF8'} />
        </button>
    );
}

const styles = propsBTN => ( 
    {
        margin: '10px',
        padding: '15px 25px',
        width: '90px !important',
        height: '45px !important',
        backgroundColor: propsBTN? propsBTN : '#89BEB2',
        textAlign: 'center',
        /* shadows/lighttouch */
        boxShadow: '4px 4px 10px rgba(153, 153, 153, 0.8)',
        border: 'none',
        borderRadius:'3px'
    }
)

export default primary;
