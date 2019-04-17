import React from 'react';
import World from './World.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [],
      pacX: 6,
      pacY: 0,
      left: false,
      score: 0
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    const text = 
      ["3333332 Hailing from 1 the land of333333",
      "333333sheep and kiwis (New Zealand),333333", 
      "333333I am a San Francisco-based 1333333", 
      "333333Full-Stack developer, Creator and333333",
      "333333Collaborator. 1 Currently seeking a333333", 
      "333333user-focused Creative Technologist /333333", 
      "333333Front-End Developer role. 1333333", 
      "333333Fancy a collaboration or interested333333", 
      "333333in chatting? Let's talk!333333"];
    
    const textMatrix = [];
    text.forEach(line => {
      console.log(line, line.length)
      textMatrix.push(line.split(''))
    });
    this.setState({
      matrix: textMatrix
    })
  }
  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    e.preventDefault();
    let textMatrix = this.state.matrix;
    let x = this.state.pacX;
    let y = this.state.pacY;
    let pieceToEat;
    // move pac left
    if (e.keyCode === 37 && x > 0) {
      this.state.left = true;
      textMatrix[y][x] = '3';
      this.state.pacX -= 1;
      pieceToEat = textMatrix[y][x - 1];
      textMatrix[y][x - 1] = '2';
    }
    // move pac right
    if (e.keyCode === 39 && x < textMatrix[y].length - 1) {
      this.state.left = false;
      textMatrix[y][x] = '3';
      this.state.pacX += 1;
      pieceToEat = textMatrix[y][x + 1];
      textMatrix[y][x + 1] = '2';
    }
    // move pac up 
    if (e.keyCode === 38 && y > 0) {
      this.state.left = false;
      textMatrix[y][x] = '3';
      this.state.pacY -= 1;
      pieceToEat = textMatrix[y - 1][x];
      textMatrix[y - 1][x] = '2';
    }
    // move pac down
    if (e.keyCode === 40 && y < 8) {
      this.state.left = false;
      textMatrix[y][x] = '3';
      this.state.pacY += 1;
      pieceToEat = textMatrix[y + 1][x];
      textMatrix[y + 1][x] = '2';
    }
    if (pieceToEat === '1') {
      this.state.score += 10
    } else if (pieceToEat && pieceToEat !== '3') {
      this.state.score += 2
    }
    pieceToEat = '2';
    this.setState({
      matrix: textMatrix
    })
  }

  render() {
    return (
      <div >
        <nav className="home-nav">
          <div>Cherri Hartigan</div>
          <div>About</div>
        </nav>
        <World matrix={this.state.matrix} left={this.state.left}/>
        <div className="home-footer">
          <div className="lives">
            <img src="images/life.png"/>
            <img src="images/life.png"/>
          </div>
          <div className="score">
            <div id="points">{this.state.score}</div>
            <div>points</div>
          </div>
          <div className="projects">Projects <img src="images/arrow.png"/></div>
        </div>
      </div>
    )
  }
}

export default App;