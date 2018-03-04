import * as actionTypes from './actions';

const initialState = {
    answers: [{
        count: 0,
        name: 'Vishal Gulati',
        email: 'vishal.rvg@gmail.com',
        answerText: 'Sample answer by Vishal Gulati. Sample answer by Vishal Gulati. Sample answer by Vishal Gulati. Sample answer by Vishal Gulati.'
    }]
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LIKE_ANSWER: {
            return {
                ...state,
                answers: [...state.answers, state.answers[action.payload.index].count++]
            };
        }
        case actionTypes.DISLIKE_ANSWER: {
            return {
            };
        }
        case actionTypes.ADD_ANSWER: {
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
        }
        default:
            return state;
    }
};

export default reducer;