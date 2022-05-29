import { Table, Button } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import "./dataTable.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LOAD, LOAD_SUCCESS } from "../../store/actions";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const DataTable = () => {
  const { isLoading, usersData = [] } = useSelector(
    (state) => state.dataReducer
  );
  const dispatch = useDispatch();
  const dataSource = [
    ...usersData.map((user) => {
      const { id } = user;
      return { ...user, key: id };
    }),
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: 2,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: 3,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: 4,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: 5,
      render: (item) => (typeof item === "object" ? item.street : item),
    },
    {
      title: "Action",
      key: "action",
      render: (row) => (
        <>
          <Link to="singleUser" state={{ data: row }}>
            <Button type="secondary" className="action-btn">
              <EyeOutlined />
            </Button>
          </Link>
          <Link to={`updateUser/${row.id}`} state={{ data: row }}>
            <Button type="primary" className="action-btn">
              <EditOutlined />
            </Button>
          </Link>
          <Button
            type="danger"
            className="action-btn"
            onClick={() => {
              deleteHandler(row.id);
            }}
          >
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      dispatch({ type: LOAD });
      const json = await axios.get("http://localhost:5000/users");

      if (json.status === 200) {
        dispatch({
          type: LOAD_SUCCESS,
          payload: json.data,
          isError: false,
        });
      }
    } catch (e) {
      dispatch({
        type: LOAD_SUCCESS,
        payload: [],
        isError: true,
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    const response = await axios.delete(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      toast.success(response.data);
      fetchData();
    }
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className="dataTableContainer">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="tableSection">
          <div className="linkContainer">
            <h4> Add a New User</h4>
            <Link to="/users/add" className="link">
              Add User
            </Link>
          </div>
          <div className="tableContainer">
            <h1 className="title"> There are our Users </h1>
            <Table
              dataSource={dataSource}
              columns={columns}
              className="usersTable"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
