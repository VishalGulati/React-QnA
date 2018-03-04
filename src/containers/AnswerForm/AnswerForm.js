import React, { Component } from 'react';
import './AnswerForm.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class AnswerForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        name: '',
        email: '',
        answerText: ''
      };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({name: event.target.value});
    }
  
    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }
  
    handleTextChange(event) {
      this.setState({answerText: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onAnswerAdded(this.state.count, this.state.name, this.state.email, this.state.answerText);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="answers-form">
          <label>
            <input type="text" placeholder="Enter your name" onChange={this.handleNameChange} />
          </label>
          <label>
            <input type="text" placeholder="Enter your email" onChange={this.handleEmailChange} />
          </label>
          <br/>
          <label>
            <textarea cols="48" onChange={this.handleTextChange} />
          </label>
          <br/>
          <input className="btn btn-danger" type="submit" value="Submit" />
        </form>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
          onAnswerAdded: (count, name, email, answerText) => dispatch({type: actionTypes.ADD_ANSWER, payload: {count, name, email, answerText}})
      }
  }

  export default connect(null, mapDispatchToProps)(AnswerForm);