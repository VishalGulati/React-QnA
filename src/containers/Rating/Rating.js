import React, { Component } from 'react';
import './Rating.css';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class Rating extends Component {
    constructor(props) {
      super(props);
      this.handleLike = this.handleLike.bind(this);
      this.handleDislike = this.handleDislike.bind(this);
    }
  
    handleLike(event) {
      event.preventDefault();
      this.props.onAnswerLike(this.props.index);
    }
    
    handleDislike(event) {
        event.preventDefault();
        this.props.onAnswerLike(this.props.index);
    }

    render () {
        const {count} = this.props;
        return (
            <div className="col-xs-1 ratings-container">
                <span className="glyphicon glyphicon-triangle-top" onClick={this.handleLike}></span>
                <span>{count}</span>
                <span className="glyphicon glyphicon-triangle-bottom" onClick={this.handleDislike}></span>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAnswerLike: (index) => dispatch({type: actionTypes.LIKE_ANSWER, payload: {index}})
    }
}

export default connect(null, mapDispatchToProps)(Rating);