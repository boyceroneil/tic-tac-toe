import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Game, Home, Navigation} from "./components";
import './App.css'
function App(){
  return(
    <div className ="App">
      <Router className="home">
      <Navigation className="home" />
        <Switch>
        <Route className = "home" path="/" exact component={() => <Home />} />
        <Route className= "Game"path="/Game" exact component={() => <Game />} />
        </Switch>
      </Router>
      <body className="body">here</body>
      <footer className="body">here</footer>

    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



//  if(this.state.isX === true){
  //   this.setState({val:"X"})
  //   this.setState(prevState=> {
  //     return{
  //       isX: prevState.isX = false,
  //       isO: prevState.isO = true
  //     }
  //   })
  //  }
  //  else if(this.state.isO === true){
  //   this.setState({val:"O"})
  //   this.setState(prevState=> {
  //     return{
  //       isX: prevState.isX = true,
  //       isO: prevState.isO = false
  //     }
  //   })

  //class Match extends Component{
    //  constructor(){
    //    super()
    //    this.state={
    //      isX: true,
    //      x: "X",
    //      isO: false,
    //      o: "O",
    //      player1: "",
    //      player2: "",
    //      val: Array(9).fill(null)
    //    }
    //    this.change= this.change.bind(this)
    //  }
    //  change(props){
    //    const vals = this.state.val.slice();
    //    if(<Logic /> || vals[props] ){
    //      return;
    //    }
    // vals[props] = this.state.isX ? 'X':'O';
    //    this.setState({
    //      vals: vals,
    //      isX: !this.state.isX
    //    });
       
    // }
    // render(){
    //   return(
    //     <div className="tic_tac_toe">
    //       <div class="row">
    //       <div class="square1">
    //         <button onClick= {this.change(0)}></button>
    //         </div>
    //         <div class="square1">
    //         <button onClick ={this.change(1)}> </button>
    //         </div>
    //         <div class="square1">
    //         <button onClick ={this.change(2)}> </button>
    //         </div>       
            
    //       </div>
    
    //       <div class="row">
    //         <div class="square1">
    //         <button onClick= {this.change(3)}> </button>
    //         </div>
    //         <div class="square1">
    //         <button onClick ={this.change(4)}> </button>
    //         </div>
    //         <div class="square1">
    //         <button onClick ={this.change(5)}> </button>
    //         </div>
    //       </div>
    
    
    //       <div class="row">
    //       <div class="square1">
    //         <button onClick= {this.change(6)}> </button>
    //         </div>
    //         <div class="square1">
    //         <button onClick ={this.change(7)}> </button>
    //         </div>
    //         <div class="square1">
    //         <button onClick ={this.change(8)}> </button>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }  
    // }







//     import logo from './logo.svg';
// import { render } from '@testing-library/react';
// import React, {Component} from 'react';
// import './App.css';
// import Logic from './Component/Logic';

// class App extends Component{
// constructor(){
//   super();
//   this.state={
//     isX: true,
//     value: null,
//     value2: null,
//     value3: null,
//     value4: null,
//     value5: null,
//     value6: null,
//     value7: null,
//     value8: null,
//     value9: null,
//     squares: Array(9).fill(null),
//     player1: "Ron",
//     player2: "Jon",
//   }
//   this.change = this.change.bind(this)
// }
// change(props){
//   const squares= this.state.squares.slice();
//   if(Logic(squares) || squares[props]){
//     return;
//   }  
//     squares[props] = this.state.isX ? 'X': 'O';
//     this.setState({
//       squares:squares,
//       isX: !this.state.isX,
//     });

  
// }

// render(){
//   const victor = Logic(this.state.squares);
//   var status;
//   if(victor){
//     status = 'Victor is' + victor;
//   }
//   else{
//     status = 'Next player: ' + (this.state.isX? this.state.player1 : this.state.player2);
//   }
// return(
//   <div className="board">
//     <div className = "row">
//       <button className ="square1" onClick={()=> this.change(1)}>{this.state.squares[1]}</button>
//       <button className ="square1" onClick={()=> this.change(2)}>{this.state.squares[2]}</button>
//       <button className ="square1" onClick={()=> this.change(3)}>{this.state.squares[3]}</button>
//       </div>

//     <div className = "row"></div>
//     <button className ="square1" onClick={()=> this.change(4)}>{this.state.squares[4]}</button>
//       <button className ="square1" onClick={()=> this.change(5)}>{this.state.squares[5]}</button>
//       <button className ="square1" onClick={()=> this.change(6)}>{this.state.squares[6]}</button>

//     <div className = "row"></div>
//     <button className ="square1" onClick={()=> this.change(7)}>{this.state.squares[7]}</button>
//       <button className ="square1" onClick={()=> this.change(8)}>{this.state.squares[8]}</button>
//       <button className ="square1" onClick={()=> this.change(9)}>{this.state.squares[9]}</button>
//       </div>

// );
// }
// }
