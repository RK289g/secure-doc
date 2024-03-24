import { Link } from "react-router-dom";
import "./LayoutWrapper.css";
import useGetMenuKey from "../../hooks/useGetMenuKey";
import { Header } from "antd/es/layout/layout";
import { Drawer, Menu } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
// import logo from "./images/Logo.png";
import { useState } from "react";

const LayoutWrapper = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key: key,
      icon: icon,
      children: children,
      label: label,
      type: type,
    };
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items = [
    getItem(<Link to="/">HOME</Link>, ""),
    getItem(<Link to="/guide"> GUIDE</Link>, "guide"),
    getItem(<Link to="/about">ABOUT</Link>, "about"),
  ];

  const menuKey = useGetMenuKey();

  return (
    <>
      <Header className="header">
        <Link to="/" className="logo-wrapper">
          <div className="logo-inner-wrapper">
            {/* <Image src={logo} preview={false} className="secureDoc-logo-image" /> */}
            <h3>SecureDoc</h3>
          </div>
        </Link>

        <Menu
          className="layout-menu"
          theme="dark"
          color="#000000"
          mode="horizontal"
          items={items}
          selectedKeys={menuKey}
        />
        <MenuFoldOutlined className="drawer-button" onClick={showDrawer} />

        <Drawer
          title="Navigations"
          placement={"right"}
          closable={true}
          onClose={onClose}
          open={open}
          key={"right"}
          className="drawer-wrapper"
        >
          <Menu
            className="drawer-layout-menu"
            theme="dark"
            color="#ffffff"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={items}
          />
        </Drawer>
      </Header>
    </>
  );
};

export default LayoutWrapper;
