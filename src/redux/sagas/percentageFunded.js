import { put, takeEvery } from "redux-saga/effects";
import { savePercentageFundedData, setRequestLoader } from "../actions";
import { ENDPOINT } from "../../config/endpoints";
import ApiCall from "../../services/api";
import { GET_PERCENTAGE_FUNDED_DATA } from "../actionTypes/percentageFunded";

function* fetchPercentageFundedData(actions) {
  try {
    yield put(setRequestLoader(true));
    const response = yield ApiCall({
      method: "GET",
      url: ENDPOINT.PERCENTAGE_FUNDED.PERCENTAGE_FUNDED_DATA,
    });
    if (response && response.data?.data) {
      yield put(savePercentageFundedData(response.data.data));
    } else {
    }
  } catch (err) {
  } finally {
    yield put(setRequestLoader(false));
  }
}

export default function* root() {
  yield takeEvery(GET_PERCENTAGE_FUNDED_DATA, fetchPercentageFundedData);
}
