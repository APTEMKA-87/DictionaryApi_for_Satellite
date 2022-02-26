import {applyMiddleware, combineReducers, createStore} from 'redux';
import {itemsReducer} from './redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    items: itemsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;
