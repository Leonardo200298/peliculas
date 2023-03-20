import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
console.log("estoy en el store")
export default store;