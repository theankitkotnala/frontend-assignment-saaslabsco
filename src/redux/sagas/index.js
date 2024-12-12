import { all } from "redux-saga/effects";
import percentageFundedSaga from "./percentageFunded";

export default function* rootSaga() {
  yield all([
    percentageFundedSaga()
  ])
}
