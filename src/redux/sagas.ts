import { takeEvery, put, call, all } from 'redux-saga/effects';
import {BooksSearchActionTypes} from "./types";
import {addFetchedBooks} from "./actions";
import { api } from "../services/api/api";

function* fetchCtyWeatherWorker(action: BooksSearchActionTypes): Generator {
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

function* searchMovieWatcher() {
    yield takeEvery('FETCH_BOOKS_ASYNC', fetchCtyWeatherWorker);
}

export function* rootSaga(): Generator {
    yield all([searchMovieWatcher()]);
}