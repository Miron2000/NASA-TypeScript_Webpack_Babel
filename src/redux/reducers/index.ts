import { ApiApods } from '../../types';

const initialState = {
  apod: {},
};

export default function reducer(state = initialState, action: { type: string; payload: ApiApods }) {
  switch (action.type) {
    case 'SET_APOD': {
      return {
        ...state,
        apod: {
          ...state.apod,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
}
