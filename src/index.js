import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore } from 'redux'
import 'tachyons';
import Counter from './components/Counter'
import {INCREMENT,DECREMENT} from "./constants/constants";
//
//
//
// const SomeComponent = ({someComponentProperty, dispatch}) => (
//    <div>
//     <button
//     onClick={ e => {
//         dispatch({type: 'some action'})
//     }}>Some Button</button>
//     <h1> {someComponentProperty} </h1>
// </div>
// )
//
// function  someStateToPropsMapper(state) {
//     return{
//         someComponentProperty: state.someNewAttribute
//     }
//
// }
//
// const SomeContainer = connect(someStateToPropsMapper)(SomeComponent)
//
// const someReducer = (state = {someDefaultAttribute: 'some default state' }, action) => {
//     switch (action.type){
//         case 'some action':
//             alert('some action was dispatched');
//             return {
//                 someNewAttribute: 'some new state'
//             };
//         default:
//             return state;
//     }
// }
//
// const someStore = createStore(someReducer);
//


//
// ReactDOM.render
// (
//     <Provider store = {someStore}>
//     <SomeContainer/>
//     </Provider>
//
//     ,document.getElementById('root'));


// -------------------------

// Building counter


const increment = (dispatch) => {
 return (dispatch({type: INCREMENT } ));
};

const decrement = (dispatch) => {
    return (dispatch({type:DECREMENT }));
};

let initialState = {value: 9};




const counterReducer = (state=initialState, action) => {
    switch (action.type){
        case INCREMENT:
            return ({value: state.value + 1});
        case DECREMENT:
            return ({value: state.value - 1 });
        default:
            return state;
    }

}





let store = createStore(counterReducer);


const dispatcherToPropertiesMapper = (dispatcher) => {
    return ({
        increment: () => (increment(dispatcher)),
        decrement: () => (decrement(dispatcher)),
    });
};

const stateToPropertiesMapper = (state) => {
    return ({value: state.value});
}

const App = connect( stateToPropertiesMapper, dispatcherToPropertiesMapper)(Counter);

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,document.getElementById('root'));