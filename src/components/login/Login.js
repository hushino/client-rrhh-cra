/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox, Form, Icon, Input, Button, Row, Col } from 'antd';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';

function Login(props) {
  const dispatch = useDispatch();

  const payload = {
    usernameOrEmail: "user@gmail.com",
    password: "123"
  };

  function imaginator(stateOfLife) {
    return {
      type: 0,
      stateOfLife
    };
  }
  
  const fetchData = async () => {
    const response = await axios.post('http://localhost:8080/api/auth/signin', payload)
    dispatch(imaginator(response.data))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        payload.usernameOrEmail = values.username;
        payload.password = values.password;
        fetchData();
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Ingrese su nombre de usuario!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Usuario"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Ingrese su contraseña!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Contraseña"
          />,
        )}
      </Form.Item>
      <Form.Item>

        <Row></Row>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Iniciar
        </Button>
      </Form.Item>
    </Form>
  );
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm

