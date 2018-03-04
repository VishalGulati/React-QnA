import React, { Component } from 'react';
import './AnswersList.css';
import Rating from '../Rating/Rating';
import { connect } from 'react-redux';

class AnswersList extends Component {
    render () {
        let unsortedAnswers = this.props.answers;
        const answers = unsortedAnswers.sort(function(a, b) {
            return b.count - a.count;
        });
        console.log(answers);
        const answersStack = answers.map((answer, index) => {
                return <div className="row answer" key={index}>
                    <Rating count={answer.count} index={index} />
                    <div className="col-xs-11">
                        <div className="author-detail">
                            {'Replied by ' + answer.name}
                        </div>
                        <div className="answer-text">
                            {answer.answerText}
                        </div>
                    </div>
                </div>
            }
        );
        return (
            <div className="container answers-list-container">
                {answersStack}
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
      answers: store.answers
    };
  }
  
export default connect(mapStateToProps)(AnswersList);