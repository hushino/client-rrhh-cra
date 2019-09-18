/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function Editarpersona(props) {
    const [data, setData] = useState([])
    //const { dataIndex } = props.match.params
   // console.log(dataIndex)
    const fetchData = () => axios.get(`http://localhost:8080/api/viewpersona/`)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
        console.log(props);
    /* const postData = (values) => axios.post(`http://localhost:8080/api/addPersona`, values)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        }) */

    useEffect(() => {

        fetchData();

    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        /* props.form.validateFields((err, values) => {
            if (!err) {
                fetchData();
            }
        }); */
    };
    //const { getFieldDecorator } = props.form;
    return (
        <div>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Usuario"
                />
            </Form.Item>
            <Form.Item>
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Contraseña"
                />
            </Form.Item>
            <Form.Item>
              <Row></Row>
              <Button type="primary" htmlType="submit" className="login-form-button" >
                Iniciar
              </Button>
            </Form.Item>
          </Form>
        </div>
    )
}

export default Editarpersona