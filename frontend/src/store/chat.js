import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing chat-related state.
 * @type {import("@reduxjs/toolkit").Slice}
 */
export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    history: [
  {
    id: 0,
    description: "Welcome to the chat! How can I assist you today?",
  },
  {
    id: 1,
    description: "Please feel free to ask any questions you may have.",
  },
  {
    id: 2,
    description: "I'm here to help you with any inquiries about rental properties.",
  },
],
    loading: false,
    error: null,
  },
  reducers: {
    /**
     * Action creator for fetching a new message.
     * @param {Object} state - Current state.
     * @param {import("@reduxjs/toolkit").PayloadAction<string>} action - Payload action containing the message text.
     * @returns {void}
     */
    fetchMessage: (state, action) => {
      return {
        ...state,
        error: null,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            text: action.payload,
            type: "q", // q: question, a: answer
            channelId: 0,
          },
        ],
        loading: true,
      };
    },
    /**
     * Action creator for successful message fetch.
     * @param {Object} state - Current state.
     * @param {import("@reduxjs/toolkit").PayloadAction<string>} action - Payload action containing the message text.
     * @returns {void}
     */
    fetchMessageSuccess: (state, action) => {
      return {
        ...state,
        error: null,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            text: action.payload,
            type: "a", // q: question, a: answer
            channelId: 0,
          },
        ],
        loading: false,
      };
    },
    /**
     * Action creator for failed message fetch.
     * @param {Object} state - Current state.
     * @param {import("@reduxjs/toolkit").PayloadAction<string>} action - Payload action containing the error message.
     * @returns {void}
     */
    fetchMessageFailed: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
});

export const { fetchMessage, fetchMessageSuccess, fetchMessageFailed } = chatSlice.actions;
