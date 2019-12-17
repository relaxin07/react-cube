import React from 'react';
import Row from './Row';
import AddBtns from './AddButons';
import RemoveBtns from './RemoveButtons';

class Cube extends React.Component {
    constructor(props) {
        super(props);
        const {rows, cols } = props;
        this.state = {
            rows,
            cols,
            removeRowBtnCoordsTop: 0,
            removeColBtnCoordsLeft: 0,
            showBtnDeleteRow: false,
            showBtnDeleteCol: false
        };
        this.timer = '';
    }

    handleHiddenRemoveBtn = () => {
        this.timer = setTimeout(() => {
            this.setState({showBtnDeleteCol: false, showBtnDeleteRow: false})
        }, 300);
    }

    handleGiveCoordsForBtnRemove = (event) => {
        const {parentElement: {offsetTop}, offsetLeft} = event.target
        if (event.target.classList.contains('cube__item')) {
            this.setState({removeRowBtnCoordsTop: offsetLeft, removeColBtnCoordsLeft: offsetTop});
        }
    }

    handleRemoveRow = () => {
        this.setState(({rows}) => ({rows: rows > 1 ? rows - 1 : true, showBtnDeleteRow: false}))
    }

    handleRemoveCol = () => {
        this.setState(({cols}) => ({cols: cols > 1 ? cols - 1 : true, showBtnDeleteCol: false}))
    }

    handleAddColumn = () => {
        this.setState(({cols}) => ({cols: cols + 1}));
    }

    handleAddRow = () => {
        this.setState(({rows}) => ({rows: rows + 1}));
    }

    handleShowRemoveRow = () => {
        this.setState(({rows}) => ({showBtnDeleteRow: rows > 1  }))
        this.setState(({cols}) => ({showBtnDeleteCol: cols > 1 }))

        this.handleClearTimer();
    }

    handleClearTimer = () => {
        clearTimeout(this.timer);
    }

    render() {
        const {cols, rows, removeRowBtnCoordsTop, removeColBtnCoordsLeft, showBtnDeleteRow, showBtnDeleteCol} = this.state;
        const {size} =  this.props;
        const shape = [...Array(rows).map((el) => el)];
        const updateShape = shape.map((el, i) =>
            <Row
                columns={cols}
                key={i}
                size={size}
                hiddenRemoveBtn={this.handleHiddenRemoveBtn}
            />)
        return (

            <div className="cube"
                 onMouseOver={this.handleGiveCoordsForBtnRemove}
                 onMouseEnter={this.handleShowRemoveRow}
                 onMouseLeave={this.handleHiddenRemoveBtn}
            >
                <RemoveBtns
                    onClearTimer={this.handleClearTimer}
                    showBtnDeleteCol={showBtnDeleteCol}
                    showBtnDeleteRow={showBtnDeleteRow}
                    onRemoveCol={this.handleRemoveCol}
                    onRemoveRow={this.handleRemoveRow}
                    size={size}
                    left={removeRowBtnCoordsTop}
                    top={removeColBtnCoordsLeft}
                />
                <AddBtns
                    size={size}
                    onAddRow={this.handleAddRow}
                    onAddColumn={this.handleAddColumn}
                />
                {updateShape}
            </div>
        );
    }
}

export default Cube;
