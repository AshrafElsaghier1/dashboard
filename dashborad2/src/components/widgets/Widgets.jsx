import {
  UserOutlined,
  ShoppingCartOutlined,
  ArrowUpOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./widget.scss";
const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <div
            className="icon-container"
            style={{
              color: "crimson",
              background: "#ff00004a",
            }}
          >
            <UserOutlined className="icon" />
          </div>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: (
          <div
            className="icon-container"
            style={{
              color: "#EDE7F6",
              background: "#CC9544",
            }}
          >
            <ShoppingCartOutlined className="icon" />
          </div>
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net earnings",
        icon: (
          <div
            className="icon-container"
            style={{
              color: "#EDE7F6",
              background: "#C65D7B",
            }}
          >
            <DollarOutlined className="icon" />
          </div>
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        icon: (
          <div
            className="icon-container"
            style={{
              color: "#EDE7F6",
              background: "#df555b",
            }}
          >
            <DollarOutlined className="icon" />
          </div>
        ),
      };
      break;

    default:
      break;
  }
  const amount = 100;
  const diff = 20;
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link} </span>
      </div>
      <div className="right">
        <div className="percent positive">
          <ArrowUpOutlined />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
