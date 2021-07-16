import { getFirebase } from 'react-redux-firebase';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({getFirebase}))
    );

export default store;