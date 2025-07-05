import { Typography, Layout, Button, Select, Row, Col, Space } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;
const Navbar = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Space>
            <HomeOutlined style={{ color: "#999" }} />
            <Text type="secondary">Home</Text>
          </Space>
        </Col>
        <Col>
          <Space>
            <Text type="secondary">24-03-2001</Text>
            <Select defaultValue="outlet" style={{ width: 120 }}>
              <Option value="outlet">Outlet name</Option>
            </Select>
            <Button type="primary" icon={<PlusOutlined />}>
              Create
            </Button>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
