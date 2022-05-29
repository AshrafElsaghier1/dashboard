import { Form, Input, Button } from "antd";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./newUser.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const AddUser = () => {
  const navigator = useNavigate();

  const onFinish = (value) => {
    const { name, address, phone, email } = value;

    const addUser = async () => {
      const response = await axios.post("http://localhost:5000/user", {
        name,
        address,
        phone,
        email,
      });
      if (response.status === 200) {
        toast.success(response.data);
      }
    };

    addUser();
    navigator("/users");
  };

  return (
    <div className="newUserContainer">
      <Sidebar />
      <div className="newUserForm">
        <Navbar />
        <h1 className="title">Add A new User</h1>
        <Form
          {...layout}
          name="nest-messages"
          className="userForm"
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter Name...." />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter Email...." />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your Address!",
              },
            ]}
          >
            <Input placeholder="Enter Address...." />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input placeholder="Enter Phone Number...." />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button htmlType="submit" className="submit">
              Add User
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
