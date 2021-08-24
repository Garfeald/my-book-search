import { combineReducers } from 'redux';
import {booksReducer} from "./booksReducer";
import {bookDetailsReducer} from "./bookDetailsReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    bookDetails: bookDetailsReducer
});

export type AppState = ReturnType<typeof rootReducer>;