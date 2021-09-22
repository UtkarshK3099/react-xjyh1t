import React from 'react';

//State concept
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      empname: 'Utkarsh',
    bManager: false
    };  
  }

  handleTextChange(e){
    this.setState({ empname: e.target.value})
  }

  //correct way for setting state based on previous state value
  handleCheckBox(){
    this.setState((prevState) => ({
      bManager: !prevState.bManager
    }));
  }

  render(){
    let role = this.state.bManager ? "Manager" : "Employee";
    return(
    <>
      <h2>State demo</h2>
      <div>
        <label>
          Employee Name:
          <input type="text" value={this.state.empname} onChange={(e) => this.handleTextChange(e)} />
        </label>
        <label>
          <input type="checkbox" value={this.state.bManager} onChange={() => this.handleCheckBox()} />
          Manager
        </label>
      </div>
      <p>{this.state.empname} is {role} </p>
    </>
    );
  }
}