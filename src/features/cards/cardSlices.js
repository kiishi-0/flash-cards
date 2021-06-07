import {createSlice} from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: {cards:{}},
    reducers: {
        addCard(state, action){
            state.cards[action.payload.id]={
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
        },
        // removeCard(state, action){
        //     state.filter( card )
        // }
    }
})

export const {addCard} = cardSlice.actions;
export default cardSlice.reducer;
export const selectCard = state => state.cards.cards;