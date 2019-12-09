import React from 'react';

const AddBtns = ({ onAddRow, onAddColumn }) => {
    return (
        <>
            <div onClick={onAddRow} className="cube__add cube__add-row"><span>+</span></div>
            <div onClick={onAddColumn} className="cube__add cube__add-item"><span>+</span></div>
        </>
    )
}

export default AddBtns;