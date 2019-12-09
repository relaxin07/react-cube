import React from 'react';

const RemoveBnt = (props) => {
    const  { onRemoveCol ,  onRemoveRow , top = 0, left = 0 , viewRows , viewCols ,onEnter }  = props;
    return (
        <React.Fragment>
            <div onClick={onRemoveRow} onMouseEnter={onEnter} style={{ top , display: viewRows }}  className="cube__remove cube__remove-row"><span>-</span></div>
            <div onClick={onRemoveCol} onMouseEnter={onEnter} style={{ left  , display : viewCols  }} className={ "cube__remove cube__remove-item"}><span>-</span></div>
        </React.Fragment >
    )
}

export default RemoveBnt;