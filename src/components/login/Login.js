/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Checkbox, Form, Icon, Input, Button } from 'antd';
import './Login.css'
function Login(props) {

    const [data, setData] = useState([]);

    const axiosInstance = axios.create({
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTY4NTUwODE0LCJleHAiOjE1NjkxNTU2MTR9.25EW7Y24UKafhODIGnFfHg2rgZPKtTgk0GqzjzY5B7iqeSuDMnO2E0L6U3BgMFxogilkTZcmF0GzWv844HNkGQ',
          'Content-Type': 'application/json'
        }
      });
      const payload = {
        usernameOrEmail:"user@gmail.com",
        password:"123"
      };
      useEffect(() => {
        
        const fetchData = async () => {
            const response = await axiosInstance.post('http://localhost:8080/api/auth/signin',payload)
          setData(response.data)
          console.log(response.data);
        }
        fetchData();
    
      }, []);

     const handleSubmit = (e) =>  {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    const { getFieldDecorator } = props.form;

      return (
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="sfd">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="rwe">register now!</a>
          </Form.Item>
        </Form>
      );
    }
 // }
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
  
export default WrappedNormalLoginForm

