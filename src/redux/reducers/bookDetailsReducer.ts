import {IBookDetails, BooksSearchActionTypes} from "../types";

export const getBooksState = ():IBookDetails => ({
    bookDetails: null,
    isLoading: false,
    searchValue: ''
})

export const bookDetailsReducer = (
    state: IBookDetails = getBooksState(),
    action: BooksSearchActionTypes): IBookDetails => {
    switch (action.type) {
        case "FETCH_BOOK_BY_ID_ASYNC":
            return {
                ...state,
                isLoading: true,
                searchValue: action.payload
            }
        case "ADD_FETCHED_BOOK_BY_ID":
            return {
                ...state,
                isLoading: false,
                bookDetails: action.payload
            }
        default:
            return state;
    }
}