/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Checkbox, Form, Icon, Input, Button, Row, Col } from 'antd';
import './Login.css';
import store from '../../redux/store';

import { useSelector, useDispatch } from 'react-redux';
//https://stackoverflow.com/questions/44608627/how-to-persist-jwt-token-throughout-session-until-user-logout
function Login(props) {
  const dispatch = useDispatch();
  //const [role, setRole] = useState()
  //const [state, setState] = useState("nani")

  const isAnyRole = localStorage.getItem("role") === 'USER' || localStorage.getItem("role") === "ADMIN";
  //console.log(props);
  const payload = {
    usernameOrEmail: "user@gmail.com",
    password: "1233"
  };

  function imaginator(stateOfLife) {
    return {
      type: 0,
      stateOfLife
    };
  }

  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    // setRole(store.getState().Role)
    // const sd = isRole ? "Estas conectado" : "No iniciaste sesion"
    // setState(sd)
  });
  function refreshPage() {
    window.location.reload();
  }
  const fetchData = async () => {
    const response = await axios.post('http://localhost:8080/rrhh-server/api/auth/signin', payload)
    dispatch(imaginator(response.data))
    localStorage.getItem("role")
    response.data.roles.forEach(element => {
      localStorage.setItem("role", element.authority);
    });
    //console.log(localStorage.getItem("role"))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        payload.usernameOrEmail = values.username;
        payload.password = values.password;
        forceUpdate();
        fetchData();
        setTimeout(function () { window.location.reload(); }, 1200);
        //window.location.reload();
      }
    });
  };
  const { getFieldDecorator } = props.form;

  const logout = () => {
    localStorage.setItem("role", "");
    //forceUpdate();
    window.location.reload();
  }
  return (

    <div>
      {
        isAnyRole
          ? <Button type="danger" size="large" onClick={logout}>
            Desconectarse
            </Button>
          : <Form onSubmit={handleSubmit} className="login-form">
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
              <Button type="primary" htmlType="submit" className="login-form-button" >
                Iniciar
              </Button>
            </Form.Item>
          </Form>
      }


    </div>

  );
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm

