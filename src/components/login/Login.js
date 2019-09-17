/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox, Form, Icon, Input, Button } from 'antd';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';


function Login(props) {
  const dispatch = useDispatch();

  const payload = {
    usernameOrEmail: "user@gmail.comm",
    password: "123m"
  };

  function imaginator(stateOfLife) {
    return {
      type: 0,
      stateOfLife
    };
  }
  const fetchData = async () => {
    const response = await axios.post('http://localhost:8080/api/auth/signin', payload)
    //setData(response.data)
    //console.log(response.data);//accessToken
    dispatch(imaginator(response.data))
  }
  /* useEffect(() => {
  }, []); */

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        payload.usernameOrEmail = values.username;
        payload.password = values.password;
        fetchData();
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
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm

