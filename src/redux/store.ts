export interface IBooks {
    accessInfo: IAccessInfo;
    etag: string;
    id: string;
    kind: string;
    saleInfo: any;
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