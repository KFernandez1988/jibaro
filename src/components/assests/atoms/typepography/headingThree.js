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
    padding: '0',
    margin: '0',
    fontWeight: '700',
    fontSize: '18px',
    textTransform: 'uppercase',
    color: textColor? textColor : '#F6FFF8',
})


export default heading;
