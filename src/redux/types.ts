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

// action types

export const FETCH_BOOKS_ASYNC = 'FETCH_BOOKS_ASYNC'
export type FetchBooksAsync = {
    type: typeof FETCH_BOOKS_ASYNC;
    payload: string
}

export type BooksSearchTypes =
    | FetchBooksAsync;
