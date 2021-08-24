import { combineReducers } from 'redux';
import {booksReducer} from "./booksReducer";
import {bookDetailsReducer} from "./bookDetailsReducer";
import { totalItemsReducer } from './totalItemsReducer';

export const rootReducer = combineReducers({
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    totalItems: totalItemsReducer
});

export type AppState = ReturnType<typeof rootReducer>;