import "./home.scss";

import Widgets from "../../components/widgets/Widgets";
import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
