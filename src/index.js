import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {habitsReducer}  from './Reducers';


const store = createStore(habitsReducer);


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