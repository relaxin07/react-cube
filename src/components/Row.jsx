import React from 'react';
import Item from './Item';

const Row = ({columns , size}) => {
    const renderItem = columns => {
        const result = [];
        for (let j = 0; j < columns; j++) {
            result.push(<Item key={j} size={size}/>)
        }
        return result;
    }
    return (
        <>
            <div className="cube__row"> {renderItem(columns)}</div>
        </>
    )
}

export default Row;
