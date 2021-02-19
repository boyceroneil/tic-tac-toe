import React, {Component} from 'react';

class Game extends Component{
    constructor(){
        super();
        this.state={
          isX: true,
          value: null,
          value2: null,
          value3: null,
          value4: null,
          value5: null,
          value6: null,
          value7: null,
          value8: null,
          value9: null,
          squares: Array(9).fill(null),
          player1: "Ron",
          player2: "Jon",
          
        }
        const square1 ={
          background: "#fff",
          border: "1px solid #999",
          float: "left",
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: 34,
          height: 100,
          marginRight: -1,
          marginTop: -1,
          padding: 0,
          textAlign: "center",
          width: 100,
          top: "50%",
          msTransform: "translateY(-50%)",
          transform: "translateY(-50%)"
        }
        this.change = this.change.bind(this)
        this.Logic = this.Logic.bind(this)
      }
      change(props){
        const squares= this.state.squares.slice();
        if(this.Logic(squares) || squares[props]){
          return;
        }  
          squares[props] = this.state.isX ? 'X': 'O';
          this.setState({
            squares:squares,
            isX: !this.state.isX,
          });
      
        
      }
       Logic(props){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for( var i =0; i < lines.length; i++){
            const[a,b,c] = lines[i];
            if(props[a]&& props[a] === props[b]&& props[a] === props[c]){
                return props[a];
            }
        }
        
        return null;
        
    }
    
      render(){
        const victor = this.Logic(this.state.squares);
        var winner;
        if(victor){
          winner = 'Victor is' + victor;
        }
        else{
          winner = 'Next player: ' + (this.state.isX? this.state.player1 : this.state.player2);
        }
      return(
        <div className="board">
          <div className = "row">
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(1)}>{this.state.squares[1]}</button>
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(2)}>{this.state.squares[2]}</button>
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(3)}>{this.state.squares[3]}</button>
            </div>
      
          <div className = "row"></div>
          <button style={this.state.square1} className ="square1" onClick={()=> this.change(4)}>{this.state.squares[4]}</button>
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(5)}>{this.state.squares[5]}</button>
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(6)}>{this.state.squares[6]}</button>
      
          <div className = "row"></div>
          <button style={this.state.square1} className ="square1" onClick={()=> this.change(7)}>{this.state.squares[7]}</button>
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(8)}>{this.state.squares[8]}</button>
            <button style={this.state.square1} className ="square1" onClick={()=> this.change(9)}>{this.state.squares[9]}</button>
            </div>
      
      );
      }
      }
      

export default Game;