import React from 'react';

const headingOne = (props) => {
    const text = props.text;
    return (
        <h1 style={styles(props.textColor)}>
            { text ? text : 'hello word' }
        </h1>
    );
}

const styles = textColor => ({
     fontWeight: '900',
     fontSize: '32px',
     textTransform: 'uppercase',
     color: textColor? textColor : '#F6FFF8'
})

export default headingOne;
