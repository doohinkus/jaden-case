import React, { Component } from 'react';
import './App.css';
import Jaden from './components/jaden';
import Form from './components/form';
import Header from './components/header';

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
        <Header text="Jaden Case" />
        <Form change={this.handleChange} submit={this.handleSubmit} />
        <Jaden text={this.state.text} warning={this.state.warning} />
      </div>
    );
  }
}

export default App;
