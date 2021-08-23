export interface IBooks {
    accessInfo: IAccessInfo;
    etag: string;
    id: string;
    kind: string;
    saleInfo: ISaleInfo;
    searchInfo: any;
    selfLink: string;
    volumeInfo: any;
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