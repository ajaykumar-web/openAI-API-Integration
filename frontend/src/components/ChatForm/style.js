/**
 * Styles object containing styling properties for the chat form.
 * @type {Object}
 * @property {Object} inputStyle - Styling properties for the input field.
 * @property {Object} btnStyle - Styling properties for the button.
 * @property {Object} formStyle - Styling properties for the form.
 */
const styles = {
  /**
   * Styling properties for the input field.
   * @type {Object}
   * @property {string} flex - Flex property for auto-sizing.
   */
  inputStyle: {
    flex: "auto",
  },
  /**
   * Styling properties for the button.
   * @type {Object}
   * @property {number} marginRight - Margin right value for positioning.
   */
  btnStyle: {
    marginRight: 0,
  },
  /**
   * Styling properties for the form.
   * @type {Object}
   * @property {string} flexWrap - Flex wrap property to prevent wrapping.
   */
  formStyle: {
    flexWrap: "nowrap",
  },
};

export default styles;
