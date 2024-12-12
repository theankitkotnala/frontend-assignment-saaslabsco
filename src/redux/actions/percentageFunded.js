
import {
    GET_PERCENTAGE_FUNDED_DATA,
    SAVE_PERCENTAGE_FUNDED_DATA,
    SET_REQUEST_LOADER
} from "../actionTypes/percentageFunded";

/**
 * Actions function to invoke 
 * the service
 * @param data
 */
export const getPercentageFundedData = () => {
  return {
    type: GET_PERCENTAGE_FUNDED_DATA,
  };
};

export const savePercentageFundedData = (data) => {
  return {
    type: SAVE_PERCENTAGE_FUNDED_DATA,
    data,
  }
}

export const setRequestLoader = (data) => {
  return {
    type: SET_REQUEST_LOADER,
    data,
  };
};