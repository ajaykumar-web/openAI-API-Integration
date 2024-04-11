import { all } from "redux-saga/effects";
import Axios from "axios";
import { fetchMessageWatcher } from "./chat";

/**
 * Function to make an API call using Axios.
 * @param {Object} options - The options for the API call.
 * @param {string} options.url - The URL for the API endpoint.
 * @param {string} options.method - The HTTP method for the request.
 * @param {Object} options.data - The data to be sent with the request.
 * @returns {Promise} A promise that resolves with the response data.
 */
export let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

/**
 * Root saga function to combine all saga watchers.
 * @returns {void}
 */
export default function* rootSaga() {
  yield all([fetchMessageWatcher()]);
}
