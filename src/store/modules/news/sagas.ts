import { takeLatest, call, put, all } from 'redux-saga/effects';
import types from './types';

import NewsService from '../../../services/NewsService';
import { setState as setNewsState } from './actions';

export function* requestNews(): any {
  try {
    const { data: list } = yield call(NewsService.requestAll);
    yield put(setNewsState({ list }));
  } catch (error) {
    // TODO: handle exception
  }
}

export function* requestFeatured(): any {
  try {
    const { data: featured } = yield call(NewsService.requestFeatured);
    yield put(setNewsState({ featured }));
  } catch (error) {
    // TODO: handle exception
  }
}

export function* getNews(params: any): any {
  try {
    const { data: details } = yield call(NewsService.get, params.id);
    yield put(setNewsState({ details }));
  } catch (error) {
    console.log('error', error);
    // TODO: handle exception
  }
}

export default all([
  takeLatest(types.NEWS_REQUEST, requestNews),
  takeLatest(types.FEATURED_REQUEST, requestFeatured),
  takeLatest(types.NEWS_GET, getNews),
]);
