import React from 'react';

const paragraph = (props) => {

    const {paragraph} = props
    return (
        <div>
            <p style={styles(props.textColor)}>
                {paragraph? paragraph : 'default text goes here'}
            </p>
        </div>
    );
}

const styles = textColor => (
    {
        fontWeight: '500',
        fontSize: '18px',
        color: textColor ? textColor : '#F6FFF8'
    }
)

export default paragraph;
