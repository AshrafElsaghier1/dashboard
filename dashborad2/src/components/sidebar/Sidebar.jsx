import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sidebar.scss";
import { AlipayOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { LIGHT_MODE, DARK_MODE } from "../../store/actions";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveTab("home");
        break;
      case "/users":
        setActiveTab("users");
        break;

      default:
        setActiveTab("");
        break;
    }
  }, [location]);

  return (
    <div className="sidebar">
      <div className="top">
        <div className="iconContainer">
          <AlipayOutlined className="icon" />
        </div>
        <h2 className="sidebarTitle">CREATIVE TIM</h2>
      </div>
      <div className="center">
        <ul className="sidebarListContainer">
          <Link
            to="/"
            className="linkItem"
            onClick={() => setActiveTab("home")}
          >
            <li className={`item ${activeTab === "home" ? "active" : " "}`}>
              <HomeOutlined className="icon " />
              Home
            </li>
          </Link>

          <Link
            to="/users"
            className="linkItem"
            onClick={() => setActiveTab("users")}
          >
            <li className={`item ${activeTab === "users" ? "active" : " "}`}>
              <UserOutlined />
              Users
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <h4> Mode </h4>
        <div className="modeSelection">
          <div onClick={() => dispatch({ type: LIGHT_MODE })}> </div>
          <div onClick={() => dispatch({ type: DARK_MODE })}> </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
