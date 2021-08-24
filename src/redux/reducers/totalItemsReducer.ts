import {BooksSearchActionTypes, IBooks, IBooksStore, ITotalItams} from "../types";

export const getBooksState = ():ITotalItams => ({
    totalItems: null,
    isLoading: false,
})

export const totalItemsReducer = (
    state: ITotalItams = getBooksState(),
    action: BooksSearchActionTypes): ITotalItams => {
    switch (action.type) {
        case "ADD_TOTAL_ITEMS":
            return {
                ...state,
                isLoading: false,
                totalItems: action.payload
            }
        default:
            return state;
    }
}