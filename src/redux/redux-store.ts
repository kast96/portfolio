import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import { appReducer } from './app-reducer';

let rootReduser = combineReducers({
  app: appReducer,
});

type rootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<rootReduserType>;

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;