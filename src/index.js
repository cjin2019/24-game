import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game24 from './game24'

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {values: ['', '', '', ''],
                  output: 'No Input'};
    this.game = new Game24();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event){
    var new_values = this.state.values.slice();
    new_values[i] = event.target.value;
    this.setState({values: new_values});
  }

  handleSubmit(event){
    var int_vals = this.game.convert_to_int(this.state.values);
    if(int_vals==null){
      this.setState({output: "Invalid Input"});
    }
    else{
      this.setState({output: "Answer: "+this.game.check(int_vals)});
    }
    event.preventDefault();
  }
  renderOutput(){
    return (
        <p>{this.state.output}</p>
      );
  }
  renderInput(i){
    return (
        <input 
          className = "card"
          type = "text" 
          value = {this.state.values[i]}
          onChange = {(e) => this.handleChange(i, e)}
        />
      );
  }
  render(){
    return (
      <div >
        <h1 className = "center">Check 24</h1>
        <form 
          className = "form-style"
          onSubmit = {this.handleSubmit}
        >
          <p>
            Put four numbers in to see if they can add, subtract, multiply, divide
            to get 24. 
          </p>
          <div className = "center">
            {this.renderInput(0)}
            {this.renderInput(1)}
            {this.renderInput(2)}
            {this.renderInput(3)} 
          </div>
          <div>
            <input className = "center" type = "submit" value = "Submit" />
          </div>
          {this.renderOutput()}
        </form>
      </div>
      );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);