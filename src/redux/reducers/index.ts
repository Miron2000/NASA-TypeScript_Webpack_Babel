import { ApiApods } from '../../types';
import * as type from '../actionTypes';

const initialState = {
  apod: {
    date: '',
    explanation: '',
    title: '',
    url: '',
  },
  loading: true,
};

export default function appReducer(state = initialState, action: { type: string; payload: ApiApods }) {
  switch (action.type) {
    case type.SET_APOD:
      return {
        ...state,
        loading: true,
      };
    case type.SET_APOD_SUCCES:
      return {
        ...state,
        loading: false,
        apod: action.payload,
      };
    default:
      return state;
  }
}
