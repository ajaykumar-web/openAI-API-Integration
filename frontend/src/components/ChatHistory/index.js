import { useEffect, useState } from "react";
import { DeleteOutlined, DownOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, List, Space, Typography } from "antd";
import styles from "./style";
import { useSelector } from "react-redux";
const { Text } = Typography;

/**
 * Component representing a list of chat history.
 * @component
 */
const ChatHistory = () => {
  // State to store the list of chat channels
  const [list, setList] = useState([]);

  // Redux hook to access chat state
  const { channels } = useSelector((state) => state.chat);

  // Effect to update the list when channels change
  useEffect(() => {
    if (channels) {
      setList(channels);
    }
  }, [channels]);

  // Dropdown menu items for each chat item
  const dropdownMenuItems = [
    {
      label: (
        <Space>
          <EditOutlined />
          <Text>Edit Title</Text>
        </Space>
      ),
      key: "edit",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <DeleteOutlined style={styles.dangerStyle} />
          <Text type="danger">Delete Chat</Text>
        </Space>
      ),
      key: "delete",
    },
  ];

  return (
    <List
      header={<div style={styles.headerStyle}>Recent Chats</div>}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          style={styles.activedItemStyle}
          actions={[
            <div key="menu">
              {/* Dropdown menu for each chat item */}
              <Dropdown trigger={["click"]} menu={{ items: dropdownMenuItems }}>
                {/* Dropdown trigger */}
                <a onClick={(e) => e.preventDefault()} style={styles.dropdownStyle}>
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>,
          ]}
        >
          {/* Chat item description */}
          <span>{item.description}</span>
        </List.Item>
      )}
    />
  );
};

export default ChatHistory;
