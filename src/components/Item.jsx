import React from 'react';

const Item = ({ onItemMouseOver }) => {
    return (
        <div className="cube__item" onMouseOver={onItemMouseOver}></div>
    )
}

export default Item;
