import { takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { incrementSaga } from "./counterSlice";

// export function* log(action: PayloadAction) {
//   console.log("log", action);
// }
function* handleIncrementSaga(payload: PayloadAction<number>) {
  console.log("Handle Increment Saga: ", payload);
}
export default function* counterSaga() {
  console.log("counter Saga");
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
