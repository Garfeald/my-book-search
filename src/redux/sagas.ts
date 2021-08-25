import { takeEvery, put, call, all } from 'redux-saga/effects';
import {BooksSearchActionTypes} from "./types";
import {addFetchedBookById, addFetchedBooks, addTotalItems} from "./actions";
import { api } from "../services/api/api";

function* fetchBooksWorker(action: BooksSearchActionTypes): Generator {
    const { payload } = action;
    try {
        const res = yield call(api.fetch.fetchBooks, payload);
        if (res) {
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
    try {
        const res = yield call(api.fetch.fetchBooks, payload);
        if (res) {
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
    try {
        const res = yield call(api.fetch.fetchBookById, payload);
        if (res) {
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