import { combineReducers } from 'redux';
import {booksReducer} from "./booksReducer";

export const rootReducer = combineReducers({
    books: booksReducer
});

export type AppState = ReturnType<typeof rootReducer>;