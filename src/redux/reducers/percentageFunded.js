import {
  SAVE_PERCENTAGE_FUNDED_DATA,
  SET_REQUEST_LOADER,
} from "../actionTypes/percentageFunded";

const initialState = {
  percentageFundedData: [],
  requestLoader: false,
};

const percentageFundedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERCENTAGE_FUNDED_DATA:
      return { ...state, percentageFundedData: action.data || [] };
    case SET_REQUEST_LOADER:
      return { ...state, requestLoader: action.data };
    default:
      return state;
  }
};

export default percentageFundedReducer;
