import React from 'react';

class Row extends React.Component {
 
  renderRow() {
    let innerHTML = []
    this.props.row.forEach((char, i) => {
      if (char === '1') {
        innerHTML.push(<div key={this.props.rowIndex + i} className="world-char"><div className="cherry"><img src="images/cherry.png"/></div><div className="space"></div></div>)
      } else if (char === '2') {
        innerHTML.push(<div key={this.props.rowIndex + i} className="world-char"><div className="space"></div><div id="pac"><img src={this.props.left ? "images/pac-left.png" :"images/pac.png"}/></div><div className="space"></div></div>)
      } else if (char === ' ') {
        innerHTML.push(<div key={this.props.rowIndex + i} className="world-char"><div className="space"></div> </div>)
      } else if (char === '3') {
        innerHTML.push(<div key={this.props.rowIndex + i} className="world-char"><div className="eaten"></div></div>)
      } else {
        innerHTML.push(<div key={this.props.rowIndex + i} className="world-char"><div className="world-letter">{char}</div></div>)
      }        
    })
    return <div>{innerHTML}</div>
  }
  render () {
    return <>{this.renderRow()}</>
  }
}

export default Row;