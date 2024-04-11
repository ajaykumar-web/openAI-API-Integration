/**
 * Redux action types for chat actions
 * @typedef {Object} chatActions
 * @property {string} FETCH_MESSAGE - Action type for fetching a message.
 * @property {string} FETCH_MESSAGE_SUCCESS - Action type for successful message fetching.
 * @property {string} FETCH_MESSAGE_FAILED - Action type for failed message fetching.
 */
export const chatActions = {
  FETCH_MESSAGE: "FETCH_MESSAGE",
  FETCH_MESSAGE_SUCCESS: "FETCH_MESSAGE_SUCCESS",
  FETCH_MESSAGE_FAILED: "FETCH_MESSAGE_FAILED",
};

/**
 * Action creator for fetching a message
 * @param {string} msg - The message to fetch
 * @returns {Object} The action object
 */
export const fetchMessage = (msg) => ({
  type: chatActions.FETCH_MESSAGE,
  payload: msg,
});
