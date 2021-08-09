import * as type from '../actionTypes';

const initialState = {
  techTransfer: {},
  loading: true,
};

export default function appReducer(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case type.TECH_TRANSFER:
      return {
        ...state,
        loading: true,
      };
    case type.SET_TECHTRANSFER_SUCCESS:
      return {
        ...state,
        loading: false,
        techTransfer: action.payload,
      };
    default:
      return state;
  }
}
