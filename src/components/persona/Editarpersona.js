/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function Editarpersona(props) {
    const [forms2, setForms] = useState({
        formLayout: 'horizontal',
    })
    const [data, setData] = useState([])
    const { dataIndex } = props.match.params
    const fetchData = () => axios.get(`http://localhost:8080/api/viewpersona/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const postData = (values) => axios.post(`http://localhost:8080/api/addPersona`, values)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    useEffect(() => {

        fetchData();

    }, []);
    
     

    
 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                fetchData();
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <div>
            <Form  className="login-form" onSubmit={handleSubmit}>
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
                <Form.Item >
                    <Button htmlType="submit" type="primary">Enviar</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Editarpersona