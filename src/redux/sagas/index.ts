import {
  takeEvery, put, call, fork,
} from 'redux-saga/effects';
import API_KEY from '../../config';
import { ApiApods } from '../../types';

async function getApod() {
  const request = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  const data = await request.json();
  return data;
}

// генераторы
export function* loadApod() {
  const data: ApiApods = yield call(getApod);
  yield put({ type: 'SET_APOD', payload: data });
  console.log('Loaded Apod');
}

export function* workerSaga() {
  console.log('run async');
  yield fork(loadApod);
  console.log('end async');
}

export function* watchLoadDataSaga() {
  yield takeEvery('LOAD_DATE', workerSaga);
}

export default function* rootSaga() {
  yield watchLoadDataSaga();
}
