import {createStore} from 'redux'
function countReducer(state=0, action){
    switch(action.type){
        case 'ADD' : return state+action.payload;
        case 'MINUS' : return state-action.payload;
        default: return state;
    }
}

export const store = createStore(countReducer);