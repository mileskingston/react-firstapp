import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
        +{this.props.incrementValue}
      </button>
    )
  }
}

const Result = (props) => { 
  return (
    <div className="alert alert-success">{props.counter}</div>
  );
};

class App extends React.Component {
  state = { counter: 0 };
  
  incrementCounter = (incrementValue) => {
    this.setState((prevState => {
      return {
        counter: prevState.counter + incrementValue
      }
    }));
  };

  render() {
    return (
      <div className="container text-center">
        <div className="form-group">
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        </div>
        <Result counter={this.state.counter}/> 
      </div>
    );
  }
};

export default App;
