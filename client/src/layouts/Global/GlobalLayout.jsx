import * as React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  Space,
  Button,
  Typography,
  Avatar,
  Row,
  Col,
  Input,
  Popover,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text, Link } = Typography;
const { Search } = Input;

function GlobalLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = React.useCallback(
    (type) => {
      const navigator = type?.key || type;

      if (typeof navigator === "object") {
        navigate("/");
      } else {
        switch (navigator) {
          case "home":
            navigate("/");
            break;
          default:
            navigate(navigator);
            break;
        }
      }
    },
    [navigate]
  );

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem('isLogged')
    localStorage.removeItem('user')

    navigate('/')
  }, [navigate, localStorage])

  const navigation = Object.freeze([
    {
      key: "home",
      label: "Home",
      onClick: handleClick,
    },
    {
      key: "search",
      label: "Search",
      onClick: handleClick,
    },
    {
      key: "what-we-do",
      label: "What we do",
      onClick: handleClick,
    },
    {
      key: "contact-us",
      label: "Contact Us",
      onClick: handleClick,
    },
  ]);

  const content = React.useMemo(() => {
    return (
      <div style={{ width: 200 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button block href="/profile" type="text">
            Profile
          </Button>
          <Button block onClick={handleLogout} type="text">Logout</Button>
        </Space>
      </div>
    );
  }, []);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const handleLogoClick = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleRegisterClick = React.useCallback(() => {
    navigate("/registration");
  }, [navigate]);

  const handleLoginClick = React.useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const sitePath = pathname.split("/")[1];

  const user = JSON.parse(localStorage.getItem("user"));

  const activePath = ["", undefined, null, " "].includes(sitePath)
    ? "home"
    : sitePath;

  return (
    <Layout>
      <Header className="lnf-header">
        <div className="lnf-header-left">
          <Title level={4} onClick={handleLogoClick}>
            USCFoundIt
          </Title>
        </div>
        <div className="lnf-header-center">
          <Menu
            mode="horizontal"
            selectedKeys={activePath}
            items={navigation}
            className="lnf-header-center-menu"
          />
        </div>
        <div className="lnf-header-right">
          {user ? (
            <Popover content={content} trigger="click" placement="bottomRight">
              <Space size="large">
                <Avatar icon={<UserOutlined />} />
                <Text strong>{user.full_name}</Text>
              </Space>
            </Popover>
          ) : (
            <Space>
              <Button
                className="lnf-header-right-button"
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button
                className="lnf-header-right-button"
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </Space>
          )}
        </div>
      </Header>
      <Content className="lnf-content">{<Outlet />}</Content>
      <Footer className="lnf-footer">
      <Row gutter={[48, 48]} justify="center" align="middle">
          {/* Title */}
          <Col span={4}>
            <Title className="text" level={4}>
              USCFoundIt
            </Title>
          </Col>
          {/* Navigation */}
          <Col span={12}>
            <Row gutter={[16, 16]}>
              {/* Navigation */}
              <Col span={8}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Text className="text" strong>
                      Navigation
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/">
                      Home
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/search">
                      Search
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/contact-us">
                      Contact Us
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/about-us">
                      About Us
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/support">
                      Support
                    </Link>
                  </Col>
                </Row>
              </Col>
              {/* More */}
              <Col span={8}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Text className="text" strong>
                      More
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/projects">
                      Projects
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/events">
                      Events
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/donate">
                      Donate
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link className="text-hoverable" href="/blog">
                      Blog
                    </Link>
                  </Col>
                </Row>
              </Col>
              {/* Connect */}
              <Col span={8}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Text className="text" strong>
                      Connect
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Link
                      className="text-hoverable"
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      Facebook
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link
                      className="text-hoverable"
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link
                      className="text-hoverable"
                      href="https://twitter.com"
                      target="_blank"
                    >
                      Twitter
                    </Link>
                  </Col>
                  <Col span={24}>
                    <Link
                      className="text-hoverable"
                      href="https://www.linkedin.com"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
      
        </Row>
      </Footer>
    </Layout>
  );
}

export default GlobalLayout;
