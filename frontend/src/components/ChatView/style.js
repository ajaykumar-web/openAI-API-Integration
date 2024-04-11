import COLORS from "../../utils/colors";

/**
 * Styles for the ChatView component.
 * @type {Object.<string, Object>}
 */
const styles = {
  /**
   * Style for the container of the chat view.
   */
  chatViewStyle: {
    height: "100%",
    padding: "0px 50px",
    overflowY: "auto",
  },
  /**
   * Style for the container of sent messages.
   */
  sentMsgContainerStyle: {
    textAlign: "right",
  },
  /**
   * Style for sent messages.
   */
  sentMsgStyle: {
    background: COLORS.primary,
    color: "white",
    padding: "10px",
    maxWidth: "80%",
    borderRadius: "10px 0px 10px 10px",
  },
  /**
   * Style for received messages.
   */
  receivedMsgStyle: {
    background: "white",
    padding: "10px",
    maxWidth: "80%",
    borderRadius: "0px 10px 10px 10px",
  },
  /**
   * Style for the timestamp of messages.
   */
  timeStyle: {
    fontSize: "10px",
    color: "#828387",
  },
  /**
   * Style for the top message wrapper.
   */
  topMsgWrapperStyle: {
    textAlign: "center",
    padding: "20px 0px",
    color: COLORS.grey2,
  },
  /**
   * Style for the top message text.
   */
  topMsgStyle: {
    display: "inline-block",
    background: COLORS.dark3,
    padding: "2px 10px",
    borderRadius: 8,
  },
  /**
   * Style for the text of messages.
   */
  msgTextStyle: {
    textAlign: "left",
  },
};

export default styles;
