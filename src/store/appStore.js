import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { likeTrack } from '../reducers/trackReducers'

export function configureStore(initialState = {}) {
    const reducers = combineReducers({likeTrack})
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
    return store;
};
export const store = configureStore();
store.subscribe(() => console.log(store.getState()))