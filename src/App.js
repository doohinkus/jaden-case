import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Jaden from './components/jaden';


class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tweetUrl = 'https://twitter.com/intent/tweet?text=';
  }
  state = {
    text: "How Can Our Eyes Be Real When Mirrors Aren't Real.",
    warning: ''
  }
  toJadenCase(sentence){
     return sentence.replace(/(^|\s)[a-z]/g, match => match.toUpperCase());
  }
  handleSubmit(e){
    e.preventDefault();
    window.open(`${this.tweetUrl}${this.state.text}`);
  }
  handleChange(e){
    e.preventDefault();
    const text = this.toJadenCase(e.target.value);
    const warning = this.state.text.split(" ").join("").length < 140 ? '' : 'Over 140 characters!'
    this.setState({
      text: text,
      warning: warning
    });
  }

  render() {
    return (
      <div className="container mx-auto">
        <header>
          <h1 className="text-center">Jaden Case</h1>
        </header>
        <form className="form-inline justify-content-center mt-3">
          <div className="form-group col-sm-8">
            <input type="text" onChange={this.handleChange} className="form-control w-100" id="inputText" placeholder="Tweet" />
          </div>
          <div className="form-group col-sm-4">
            <Button action={this.handleSubmit} text="Tweet" />
          </div>
        </form>
        <Jaden text={this.state.text} warning={this.state.warning} />
      </div>
    );
  }
}

export default App;
