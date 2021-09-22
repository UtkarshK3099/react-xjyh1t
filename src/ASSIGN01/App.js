import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
    count:0,
    show:true
    };  
  }
  increment = () => {
    this.setState({
      count: this.state.count +1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count -1
    });
  }


  render(){
    return(
      <div>
        <h1>Counter Demo</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment Counter</button>
        <button onClick={this.decrement}>Decrement Counter</button>
        
      </div>
    );
  }
};

