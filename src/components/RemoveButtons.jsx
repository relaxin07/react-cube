import React from 'react';

const RemoveBnt = (props) => {
    let  { onRemoveCol ,  onRemoveRow , top = 0, left = 0 , showBtnDeleteCol , showBtnDeleteRow ,onClearTimer ,size}  = props;
    return (
        <>
            <div onClick={onRemoveRow} onMouseEnter={onClearTimer} style={{ top , display: showBtnDeleteRow = showBtnDeleteRow ? 'flex' : 'none' , height:size, width: size   }}  className="cube__remove cube__remove-row"><span>-</span></div>
            <div onClick={onRemoveCol} onMouseEnter={onClearTimer} style={{ left , display : showBtnDeleteCol = showBtnDeleteCol ? 'flex' : 'none' , height:size, width: size   }} className="cube__remove cube__remove-item"><span>-</span></div>
        </>
    )
}

export default RemoveBnt;