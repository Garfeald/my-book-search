import { type } from "os"

export interface IBooks {
    accessInfo: IAccessInfo;
    etag: string;
    id: string;
    kind: string;
    saleInfo: ISaleInfo;
    searchInfo: {
        textSnippet: string;
    };
    selfLink: string;
    volumeInfo: IVolumeInfo;
}

export interface IAccessInfo {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
        isAvailable: boolean;
        acsTokenLink: string;
    }
    pdf: {
        isAvailable: boolean;
        acsTokenLink: string;
    }
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
}

export interface ISaleInfo {
    buyLink: string;
    country: string;
    isEbook: boolean;
    listPrice: {
        amount: number;
        currencyCode: string;
    }
    offers: [{
        finskyOfferType: number;
        listPrice: {
            amountInMicros: number;
            currencyCode: string;
        }
        retailPrice: {
            amountInMicros: number;
            currencyCode: string;
        }
    }]
    retailPrice: {
        amount: number;
        currencyCode: string;
    }
    saleability: string;
}

export interface IVolumeInfo {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    }
    industryIdentifiers: [{
        identifier: string;
        type: string;
    }]
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
    }
    previewLink: string;
    printType: string;
    publishedDate: string;
    readingModes: {
        image: boolean;
        text: boolean;
    }
    title: string;
}

export interface IBooksStore {
    bookInfo: IBooks[] | null;
    isLoading?: boolean;
    searchValue?: FetchBooksPayload | null;
}

export interface IBookDetails {
    bookDetails: IBooks[] | null;
    isLoading?: boolean;
    searchValue?: string;
}

export interface ITotalItams {
    totalItems: number | null;
    isLoading?: boolean;
    searchValue?: string;
}

export type CardProps = {
    image: string,
    title: string,
    categories: string,
    authors: string,
    id: string
}

export type FetchBooksPayload = {
    searchValue: string,
    pageNumber: number
}

// action types

export const FETCH_BOOKS_ASYNC = 'FETCH_BOOKS_ASYNC'
export type FetchBooksAsync = {
    type: typeof FETCH_BOOKS_ASYNC;
    payload: FetchBooksPayload
}

export const ADD_FETCHED_BOOKS = 'ADD_FETCHED_BOOKS'
export type AddFetchedBooks = {
    type: typeof ADD_FETCHED_BOOKS;
    payload: IBooks[]
}

export const FETCH_TOTAL_ITEMS_ASYNC = 'FETCH_TOTAL_ITEMS_ASYNC'
export type FetchTotalItemsAsync = {
    type: typeof FETCH_TOTAL_ITEMS_ASYNC;
    payload: FetchBooksPayload
}

export const ADD_TOTAL_ITEMS = 'ADD_TOTAL_ITEMS'
export type AddTotalItems = {
    type: typeof ADD_TOTAL_ITEMS;
    payload: number
}

export const FETCH_BOOK_BY_ID_ASYNC = 'FETCH_BOOK_BY_ID_ASYNC'
export type FetchBookByIdAsync = {
    type: typeof FETCH_BOOK_BY_ID_ASYNC;
    payload: string
}

export const ADD_FETCHED_BOOK_BY_ID = 'ADD_FETCHED_BOOK_BY_ID'
export type AddFetchedBookById = {
    type: typeof ADD_FETCHED_BOOK_BY_ID;
    payload: IBooks[]
}

export type BooksSearchActionTypes =
    | FetchBooksAsync
    | AddFetchedBooks
    | FetchBookByIdAsync
    | AddFetchedBookById
    | AddTotalItems
    | FetchTotalItemsAsync;
