import {BooksSearchTypes, FETCH_BOOKS_ASYNC} from "./types";

export const fetchBooksAsync = (searchValue: string): BooksSearchTypes => ({
    type: FETCH_BOOKS_ASYNC,
    payload: searchValue,
});