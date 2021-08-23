import {ADD_FETCHED_BOOKS, BooksSearchActionTypes, FETCH_BOOKS_ASYNC, IBooks} from "./types";

export const fetchBooksAsync = (searchValue: string): BooksSearchActionTypes => ({
    type: FETCH_BOOKS_ASYNC,
    payload: searchValue,
});

export const addFetchedBooks = (bookInfo: IBooks[]): BooksSearchActionTypes => ({
    type: ADD_FETCHED_BOOKS,
    payload: bookInfo,
})