import React from 'react';
import './App.css';
import Row from './components/Row';
import AddBtns from './components/AddButons';
import RemoveBtns from './components/RemoveButtons';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { rows, cols } = props;
    this.state = { rows, cols, removeLeft: 0, removeTop: 0, viewRows: 'none', viewCols: 'none', timer:'' };
  }

  handleHiddenRemoveBtn = () => {
      this.setState({
        timer : setTimeout(() => {
          this.setState({ viewCols: "none", viewRows: 'none' })
        }, 300),
      })
  }

  handleItemMouseOver = (event) => {
    const { parentElement: { offsetTop }, offsetLeft } = event.target
    this.setState({ removeLeft: offsetLeft, removeTop: offsetTop });
  }

  handleRemoveRow = () => {
    const { rows } = this.state;
    this.setState({ rows: rows - 1 , viewRows: "none"})
  }

  handleRemoveCol = () => {
    const { cols } = this.state;
    this.setState({ cols: cols - 1  ,  viewCols: "none"})
  }

  handleAddColumn = () => {
    const { cols } = this.state;
    this.setState({ cols: cols + 1 })
  }

  handleAddRow = () => {
    const { rows } = this.state;
    this.setState({ rows: rows + 1 })
  }

  handleShowRemoveRow = () => {
    const { rows, cols } = this.state;

    if (rows > 1) {
      this.setState({ viewRows: "flex" });
    }
    else {
      this.setState({ viewRows: "none" });
    }

    if (cols > 1) {
      this.setState({ viewCols: "flex" });
    }
    else {
      this.setState({ viewCols: "none" });
    }

    this.handleClearTimer();
  }

  handleClearTimer  = () => {
    const { timer } =  this.state;
    clearTimeout(timer);
  }

  render() {
    const { cols, rows, removeLeft, removeTop, viewRows, viewCols } = this.state;

    const shape = [];
    for (let i = 0; i < rows; i++) {
      shape.push(
        <Row columns={cols} key={i} hiddenRemoveBtn={this.handleHiddenRemoveBtn}  onItemMouseOver={this.handleItemMouseOver} />
      )
    }

    return (
      <div className="cube"  onMouseEnter={this.handleShowRemoveRow } onMouseLeave={this.handleHiddenRemoveBtn}>
        <RemoveBtns onEnter={this.handleClearTimer} viewCols={viewCols} viewRows={viewRows} onRemoveCol={this.handleRemoveCol} onRemoveRow={this.handleRemoveRow} left={removeLeft} top={removeTop} />
        <AddBtns onAddRow={this.handleAddRow} onAddColumn={this.handleAddColumn} />
        {shape}
      </div>
    );
  }
}

export default App;
