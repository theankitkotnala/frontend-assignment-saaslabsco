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
      url: ENDPOINT.COMMON.PERCENTAGE_FUNDED_DATA,
    });
    if (response && response.data) {
      yield put(savePercentageFundedData(response.data));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setRequestLoader(false));
  }
}

export default function* root() {
  yield takeEvery(GET_PERCENTAGE_FUNDED_DATA, fetchPercentageFundedData);
}
