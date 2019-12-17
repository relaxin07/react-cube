import React from 'react';

const AddBtns = ({ onAddRow, onAddColumn , size }) => {
    return (
        <>
            <div onClick={onAddRow} className="cube__add cube__add-row" style={{height: size, width: size}}><span>+</span></div>
            <div onClick={onAddColumn} className="cube__add cube__add-item" style={{height: size, width: size}}><span>+</span></div>
        </>
    )
}

export default AddBtns;