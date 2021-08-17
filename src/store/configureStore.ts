import withRedux, {Context, createWrapper, MakeStore} from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware, Middleware, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducer';

console.log(process.env.NODE_ENV);

const configureStore: MakeStore<Store> = (initialState: Context) => {
    const middlewares: Middleware[] = [];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {debug: true});

export default wrapper;
