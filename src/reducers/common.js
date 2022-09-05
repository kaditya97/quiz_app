// import {
//     LANGUAGEVALUE
// } from '../actions/types';

const initialState = {
    language: 'en'
}

export default function common(state = initialState, action) {
    switch (action.type) {
        case 'LANGUAGEVALUE':
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}