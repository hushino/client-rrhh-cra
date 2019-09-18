/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function Editarpersona(props) {
    const [data, setData] = useState([])
    const [post, setPost] = useState([])
    const [only, setOnly] = useState(0)
    const { dataIndex } = props.match.params

    //console.log(dataIndex);


    const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${dataIndex}`, values)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })


    useLayoutEffect(() => {
        const getData = () => axios.get(`http://localhost:8080/api/viewpersona/${dataIndex}`)
            .then(function (response) {
                console.log(response.data)
                setData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
        getData()
    }, [dataIndex])

    useEffect(() => {
        props.form.setFieldsValue({
            nombre: data.nombre,
            apellido: data.apellido,
            legajo: data.legajo,
            dni: data.dni,
            /* image: data.image, */
            fecha: data.fecha,
        });
    }, [data]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                postData(values);
            }
        });
    };
    const { getFieldDecorator } = props.form;
    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <div>
            <Layout style={{ background: "white", height: "calc(190vh - 1px)" }}>

                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Col>
                            <h2>Actualizar datos de una persona</h2>
                            <Form onSubmit={handleSubmit} className="update-form">

                                <Form.Item label="Nombre">
                                    {getFieldDecorator('nombre', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            name="nombre"
                                            placeholder={data.nombre}
                                            setFieldsValue={data.nombre}
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Apellido">
                                    {getFieldDecorator('apellido', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder={data.apellido}
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Legajo">
                                    {getFieldDecorator('legajo', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder={data.legajo}
                                            setFieldsValue={data.legajo}
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="DNI">
                                    {getFieldDecorator('dni', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder={data.dni}
                                            setFieldsValue={data.dni}
                                        />,
                                    )}
                                </Form.Item>

                                {/*    <Form.Item label="foto" >
                                    {getFieldDecorator('foto', {
                                        valuePropName: 'fileList',
                                        getValueFromEvent: normFile,
                                        rules: [{ required: true, message: 'Suba un archivo .png!' }],
                                    })(
                                        <Upload name="foto" action="/upload.do" listType="picture">
                                            <Button>
                                                <Icon type="upload" /> Click para subir
                                            </Button>
                                        </Upload>,
                                    )}
                                </Form.Item> */}
                                <Form.Item label="fecha">
                                    {getFieldDecorator('fecha', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="date"
                                            placeholder={data.fecha}
                                            setFieldsValue={data.fecha}
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Row></Row>
                                    <Button type="primary" htmlType="submit" className="update-form-button" >
                                        Enviar Actualizacion
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )
}
const WrappedEditarPersonaForm = Form.create({ name: 'editarPersona' })(Editarpersona);
export default WrappedEditarPersonaForm