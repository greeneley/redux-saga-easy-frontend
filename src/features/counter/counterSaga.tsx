import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

// export function* log(action: PayloadAction) {
//   console.log("log", action);
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log("Handle Increment Saga");

  // wait 2s
  yield delay(2000);
  console.log("waiting done ");
  // dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log("counter Saga");
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
