import { takeEvery, put, all } from 'redux-saga/effects';
import {BooksSearchActionTypes} from "./types";
import {addFetchedBookById, addFetchedBooks, addTotalItems} from "./actions";
import { api } from "../services/api/api";
import * as Effects from "redux-saga/effects";

function* fetchBooksWorker(action: BooksSearchActionTypes): Generator {
    const { payload } = action;
    const { fetchBooks } = api.fetch
    const call: any = Effects.call
    try {
        const res = yield call(fetchBooks, payload);
        if (res) {
            // @ts-ignore
            yield put(addFetchedBooks(res.data.items));
        }
    } catch (e) {
        yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
    }
}

function* fetchBooksWatcher() {
    yield takeEvery('FETCH_BOOKS_ASYNC', fetchBooksWorker);
}

function* fetchTotalItemsWorker(action: BooksSearchActionTypes): Generator {
    const { payload } = action;
    const { fetchBooks } = api.fetch
    const call: any = Effects.call
    try {
        const res = yield call(fetchBooks, payload);
        if (res) {
            // @ts-ignore
            yield put(addTotalItems(res.data.totalItems));
        }
    } catch (e) {
        yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
    }
}

function* fetchTotalItemsWatcher() {
    yield takeEvery('FETCH_TOTAL_ITEMS_ASYNC', fetchTotalItemsWorker);
}

function* fetchBookByIdWorker(action: BooksSearchActionTypes): Generator {
    const { payload } = action;
    const { fetchBookById } = api.fetch
    const call: any = Effects.call
    try {
        const res = yield call(fetchBookById, payload);
        if (res) {
            // @ts-ignore
            yield put(addFetchedBookById(res.data.items));
        }
    } catch (e) {
        yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
    }
}

function* fetchBookByIdWatcher() {
    yield takeEvery('FETCH_BOOK_BY_ID_ASYNC', fetchBookByIdWorker);
}

export function* rootSaga(): Generator {
    yield all([fetchBooksWatcher(), fetchBookByIdWatcher(), fetchTotalItemsWatcher()]);
}