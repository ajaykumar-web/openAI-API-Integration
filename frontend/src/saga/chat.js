import { call, put, takeLatest } from "redux-saga/effects";
import { callAPI } from ".";
import { actions } from "../actions";
import { fetchMessage, fetchMessageFailed, fetchMessageSuccess } from "../store/chat";
import { API_HOST } from "../utils/constants";

/**
 * Saga function to handle fetching messages.
 * @param {Object} action - The action containing the payload.
 * @returns {void}
 */
export function* fetchMessageSaga(action) {
  try {
    yield put(fetchMessage(action.payload));
    let result = yield call(() =>
      callAPI({ url: `${API_HOST}/chat`, method: "POST", data: { message: action.payload } })
    );
    yield put(fetchMessageSuccess(result.data?.message));
  } catch (err) {
    yield put(fetchMessageFailed(err.response?.data?.error?.message ?? "Failed to fetch message."));
  }
}

/**
 * Saga watcher function for fetching messages.
 * Watches for the latest FETCH_MESSAGE action.
 * @returns {void}
 */
export function* fetchMessageWatcher() {
  yield takeLatest(actions.chat.FETCH_MESSAGE, fetchMessageSaga);
}
