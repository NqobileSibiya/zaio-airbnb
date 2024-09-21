import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from './reducer/ListingsReducer'; // Use the correct case
import { ModalReducer } from './reducer/ModalReducer';

const reducer = combineReducers({listingList: listingListReducer, Modal: ModalReducer,});

const initialState = {};
const middleware = [thunk];
const store = createStore(
    reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;