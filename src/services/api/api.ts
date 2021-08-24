import {FetchBooksPayload, IBooks} from "../../redux/types";

const axios = require('axios');
export const api = {
    fetch: {
        fetchBooks: (payload: FetchBooksPayload): Promise<IBooks> =>
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${payload.searchValue}&key=${process.env.API_KEY}&startIndex=${payload.pageNumber}&maxResults=16`),
        fetchBookById: (payload: string): Promise<IBooks> =>
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${payload}&key=${process.env.API_KEY}&maxResults=10`)
    },
};