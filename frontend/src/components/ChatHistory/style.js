import COLORS from "../../utils/colors";

/**
 * Object containing styles for the ChatHistory component.
 * @type {Object}
 */
const styles = {
  /**
   * Styling for elements indicating danger.
   * @type {Object}
   */
  dangerStyle: {
    color: "#ff4d4f",
  },
  /**
   * Styling for dropdown elements.
   * @type {Object}
   */
  dropdownStyle: {
    color: "black",
  },
  /**
   * Styling for the header of the chat history.
   * @type {Object}
   */
  headerStyle: {
    padding: "5px 24px",
    fontWeight: 600,
    fontSize: 20,
  },
  /**
   * Styling for active items in the chat history.
   * @type {Object}
   */
  activedItemStyle: {
    background: COLORS.dark1, // Utilizing color from external source
  },
};

export default styles;
