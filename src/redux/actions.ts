import {
    ADD_FETCHED_BOOK_BY_ID,
    ADD_FETCHED_BOOKS,
    ADD_TOTAL_ITEMS,
    BooksSearchActionTypes,
    FETCH_BOOK_BY_ID_ASYNC,
    FETCH_BOOKS_ASYNC,
    FETCH_TOTAL_ITEMS_ASYNC,
    FetchBooksPayload,
    IBooks
} from "./types";

export const fetchBooksAsync = (searchValue: FetchBooksPayload): BooksSearchActionTypes => ({
    type: FETCH_BOOKS_ASYNC,
    payload: searchValue,
});

export const addFetchedBooks = (bookInfo: IBooks[]): BooksSearchActionTypes => ({
    type: ADD_FETCHED_BOOKS,
    payload: bookInfo,
})

export const fetchTotalItemsAsync = (searchValue: FetchBooksPayload): BooksSearchActionTypes => ({
    type: FETCH_TOTAL_ITEMS_ASYNC,
    payload: searchValue,
})

export const addTotalItems = (totalItems: number): BooksSearchActionTypes => ({
    type: ADD_TOTAL_ITEMS,
    payload: totalItems,
})

export const fetchBookById = (id: string): BooksSearchActionTypes => ({
    type: FETCH_BOOK_BY_ID_ASYNC,
    payload: id,
})

export const addFetchedBookById = (bookInfo: IBooks[]): BooksSearchActionTypes => ({
    type: ADD_FETCHED_BOOK_BY_ID,
    payload: bookInfo,
})