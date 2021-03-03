import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import news from './news/sagas';

export default function* rootSaga(): Generator<
  AllEffect<AllEffect<ForkEffect<never>>>,
  any,
  unknown
> {
  return yield all([news]);
}
