import React, { Component } from 'react';
import './AnswersSection.css';
import AnswersList from '../../containers/AnswersList/AnswersList';
import AnswerForm from '../../containers/AnswerForm/AnswerForm';

class AnswersSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
            <AnswersList />
            <AnswerForm />
          </div>
      );
    }
  }

  export default AnswersSection;