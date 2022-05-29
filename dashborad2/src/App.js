import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTable from "./pages/dataTable/DataTable";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import AddUser from "./pages/addUser/AddUser.jsx";
import UpdateUser from "./pages/editUser/EditUser.jsx";
import View from "./pages/view/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

const App = () => {
  const { isDarkThieme } = useSelector((state) => state.thiemeReducer);

  return (
    <div className={`app ${isDarkThieme ? "dark" : ""}`}>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={800} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<DataTable />} />
              <Route path="singleUser" element={<View />} />
              <Route path="add" element={<AddUser />} />
              <Route path="updateUser/:id" element={<UpdateUser />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
