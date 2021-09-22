import React from 'react';

//React component using ES2015 class
/*
class OSComponent extends React.Component {
  render() {
    var i=5;
    // this.props.os="Linux"; //Immutable properties
    return (
      <>
        <h1>Operating System: {this.props.os}{i*10+1}</h1>
        <h3>Developed by {this.props.children}</h3>
      </>
    );
  }
}
*/

//React component as a Functional component
const OSComponent =(props) => {
  return (
    <div>
      <h1>Operating System: {props.os}</h1>
        <h3>Developed by {props.children}</h3>
    </div>

  )
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <OSComponent os="Windows">Microsoft</OSComponent>
        <OSComponent os="Solaris">Sun Microsystems</OSComponent>
        <OSComponent os="iOS">Apple</OSComponent>
      </>
    );
  }
}
