import {createSlice} from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicSlice';

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes:{}},
    reducers:{
        addQuiz(state, action){
            // const {id, name, topicId, cardsIds} = action.payload;
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardsIds: action.payload.cardsIds
            }
        }
    }
})

export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, id: payload.id}));
    }
};

export const selectQuiz = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizSlice.actions;
export default quizSlice.reducer;