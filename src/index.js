import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {habitsReducer}  from './Reducers';

//Midllware fun
//logger(obj)(next)(action) <- redux call like this(curring)
// const logger = function({dispatch , getState}){
//     return function (next) {
//         return function (action) {
//             console.log('ACTION_TYPE = ',action.type);
//             next(action)
//         }
//     }
// }

const logger = ({dispatch , getState}) => (next) => (action) => {
    if(typeof action !== 'function') console.log('ACTION_TYPE = ',action.type);
    next(action)
}

//thunk is naming covention used
//we can instll redux-thunk
//it will automatically check if action is
// function it will pass it dispatch 

// const thunk = ({dispatch , getState}) => (next) => (action) => {
//     if(typeof action === 'function')
//     {
//         action(dispatch);
//         return;
//     }
//     next(action);
// } 


const store = createStore(habitsReducer,applyMiddleware(logger));


// store.dispatch({type:'ADD_MOVIES',
// movies: [{name:"superMan"}]
// })

// console.log(store.getState());

export const StoreContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    // <Provider store={store}>
    //     <App /> 
    // </Provider>
    <StoreContext.Provider value={store}>
    <App />
    </StoreContext.Provider>
);