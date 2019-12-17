import React from 'react';

const Item = ({size}) => {
    return (
        <div className="cube__item" style={{height: size , width: size} } ></div>
    )
}

export default Item;
