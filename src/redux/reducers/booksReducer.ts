import {BooksSearchActionTypes, IBooks, IBooksStore} from "../types";

export const getBooksState = ():IBooksStore => ({
    bookInfo: null,
    isLoading: false,
    searchValue: ''
})

export const booksReducer = (
    state: IBooksStore = getBooksState(),
    action: BooksSearchActionTypes): IBooksStore => {
    switch (action.type) {
        case "FETCH_BOOKS_ASYNC":
            return {
                ...state,
                isLoading: true,
                searchValue: action.payload
            }
        case "ADD_FETCHED_BOOKS":
            return {
                ...state,
                isLoading: false,
                bookInfo: action.payload
            }
        default:
            return state;
    }
}