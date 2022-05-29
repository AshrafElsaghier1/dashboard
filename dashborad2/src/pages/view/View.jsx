import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./view.scss";

const View = () => {
  const location = useLocation();
  const { data } = location.state;
  const { name, email, phone, address } = data;
  return (
    <div className="singleUser">
      <Sidebar />
      <div className="userContainer">
        <Navbar />
        <div className="userInfo">
          <h1> About User </h1>

          <h2>
            <span className="key"> Name: </span>
            <span className="value">{name}</span>
          </h2>
          <h2>
            <span className="key"> Email: </span>
            <span className="value">{email}</span>
          </h2>
          <h2>
            <span className="key"> Address: </span>
            <span className="value"> {address}</span>
          </h2>
          <h2>
            <span className="key"> Phone: </span>
            <span className="value"> {phone}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default View;
