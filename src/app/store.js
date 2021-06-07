import { configureStore } from "@reduxjs/toolkit";
import {topicsReducer} from '../features/topics/topicSlice.js';
import quizReducer from '../features/quizzes/quizSlice.js';
import cardsReducer from '../features/cards/cardSlices';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer,
  },
});
