import { AudioOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../../actions/chatActions";
import styles from "./style";

/**
 * Component representing a form for chat input.
 * @component
 */
const ChatForm = () => {
  // Form instance for managing form state
  const [chatForm] = Form.useForm();

  // Reference to the message input element
  const messageInputRef = useRef(null);

  // Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Redux hook to access chat state
  const { loading } = useSelector((state) => state.chat);

  /**
   * Function to handle form submission.
   * @param {Event} event - The submit event.
   */
  const onSubmit = (event) => {
    if (!event.target.value) {
      return;
    }
    dispatch(fetchMessage(event.target.value));
    chatForm.resetFields();
  };

  /**
   * Effect to focus on the message input when loading state changes.
   */
  useEffect(() => {
    if (!loading) {
      // To run in the next cycle.
      setTimeout(() => {
        messageInputRef.current.focus();
      }, 0);
    }
  }, [loading]);

  return (
    <Form layout="inline" form={chatForm} name="message-form" style={styles.formStyle}>
      <Form.Item style={styles.inputStyle} name="message">
        <Input
          size="large"
          suffix={<PaperClipOutlined />}
          placeholder="Message"
          disabled={loading}
          onPressEnter={onSubmit}
          ref={messageInputRef}
        />
      </Form.Item>
      <Form.Item style={styles.btnStyle} name="sendMsg">
        <Button type="primary" size="large" shape="circle">
          <AudioOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChatForm;
