import React from 'react';

const heading = (props) => {
    const text = props.text;
    return (
        <h1 style={styles(props.textColor)}>
            { text ? text : 'hello word' }
        </h1>
    );
}

const styles = textColor => ({
    fontWeight: '700',
    fontSize: '26px',
    textTransform: 'uppercase',
    color: textColor? textColor : '#F6FFF8',
    margin: '0',
    padding : '0'
})

export default heading;
