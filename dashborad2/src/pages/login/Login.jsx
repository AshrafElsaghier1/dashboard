import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import "./login.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../store/actions";
const mainUrl = "http://localhost:3001";
const Login = () => {
  const navigator = useNavigate();
  const userLogin = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  // const onFinish = (values) => {
  //   const { email, password } = values;
  //   axios
  //     .post("https://medtroops-backend.appssquare.com/api/admin/login", {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       if (res.data.token) {
  //         navigator(mainUrl);
  //       }
  //     })

  // };
  const onFinish = (values) => {
    const { email, password } = values;
    if (
      userLogin.users[0].email === email &&
      userLogin.users[0].password === password
    ) {
      dispatch({ type: LOGIN });
      toast.success("you hava loggedin");
      navigator("/");
    } else {
      toast.error(" your email not valid ");
    }
  };
  return (
    <div className="formContainer">
      <Form name="normal_login" className="loginForm" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          className="formItem"
        >
          <Input
            prefix={<MailOutlined className="icon" />}
            placeholder="email"
            className="inputField"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="icon" />}
            type="password"
            placeholder="Password"
            className="inputField"
          />
        </Form.Item>

        <Form.Item>
          <Button type="danger" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
