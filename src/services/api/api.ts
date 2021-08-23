import {IBooks} from "../../redux/types";

const axios = require('axios');
export const api = {
    fetch: {
        fetchBooks: (payload: string): Promise<IBooks> =>
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${payload}&key=${process.env.API_KEY}`),
        fetchBookById: (payload: string): Promise<IBooks> =>
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${payload}&key=${process.env.API_KEY}`)
    },
};