import { Avatar, Input } from "antd";
import { SearchOutlined, BulbOutlined, BellOutlined } from "@ant-design/icons";
import "./navbar.scss";
import { useDispatch } from "react-redux";
import { TOGGLE } from "../../store/actions";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbarContainer">
      <div className="navbarItems">
        <ul className="navList">
          <li className="item counterContainer">
            <span className="counter">3</span>
            <BellOutlined className="icon" />
          </li>
          <li className="item">
            <span onClick={() => dispatch({ type: TOGGLE })}>
              <BulbOutlined className="icon" />
            </span>
          </li>
          <li className="item">
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              className="avatar"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
