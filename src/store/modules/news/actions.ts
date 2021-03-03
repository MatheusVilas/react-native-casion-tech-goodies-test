import types from './types';

export const setState: any = (reducerState: any) => {
  return {
    type: types.REDUCER_SET_STATE,
    payload: { reducerState },
  };
};

export const newsRequest: any = () => {
  return {
    type: types.NEWS_REQUEST,
  };
};

export const featuredRequest: any = () => {
  return {
    type: types.FEATURED_REQUEST,
  };
};

export const newsGet: any = (id: number) => {
  return {
    type: types.NEWS_GET,
    id,
  };
};
