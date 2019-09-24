/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function Crearpersona(props) {
    //const [data, setData] = useState([])
    const [imagestate, setImagestate] = useState({ loading: false })
    const [uploadImage, setUploadImage] = useState({})
    let truedata = null;
    const reader = new FileReader();
    //console.log(dataIndex);
    const { getFieldDecorator } = props.form;

    const payload = {
        nombre: "nombrefake",
        apellido: "nombrefake",
        foto: "nombrefakefoto",
        legajo: "nombrefake",
        dni: "nombre",
        fecha: "nombre",
    };

    function getBase64(img, callback) {

        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        /* if (data.nombre === "" || data.nombre == undefined || data.nombre === null || data.nombre == NaN) {
            message.error('Escribe un nombre primero !');
        } */

        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Solo puedes subir archivos JPG/PNG !');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('La imagen debe pesar menos de 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    let bodyFormData = new FormData();

    //useEffect(() => { }, []);
    const handleChange = info => {
        /* if (payload.nombre === "" || isNaN(payload.nombre) || payload.nombre === null) {
            message.error('Escribe un nombre primero !');
            return;
        } */
        if (info.file.status === 'uploading') {
            setImagestate({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} imagen cargada exitosamente`);

            bodyFormData.append('image', new Blob([info.file.originFileObj], { type: 'image/jpg' }));
            setUploadImage(bodyFormData)

            getBase64(info.file.originFileObj, imageUrl =>
                setImagestate({
                    imageUrl,
                    loading: false,
                }),
            );
        }

    };

    const uploadButton = (
        <div >
            <Icon type={imagestate.loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Subir</div>
            {/*  <img src={`http://localhost:3003/upload/image/` + data.foto} alt="avatar" style={{ width: '100%' }} /> */}
        </div>
    );

    const postData = () => axios.post(`http://localhost:8080/api/addPersona`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    const postImage = (bodyFormData) => axios.post("http://localhost:3003/upload", bodyFormData)
        .then(function (response) {
            //console.log(response.data.filename)
            if (response.data.filename !== undefined) {
                //data.foto = response.data.filename
                payload.foto = response.data.filename
            }
            //payload.foto = response.data.filename
            postData()
        })
        .catch(function (response) {
            console.log(response);
        })


    const { imageUrl } = imagestate;


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.apellido = values.apellido
                payload.nombre = values.nombre
                payload.dni = values.dni

                payload.legajo = values.legajo
                payload.fecha = values.fecha.toString()

                for (let value of uploadImage.getAll('image')) {
                    //console.log('asd ' + value);
                    bodyFormData.append('image', new Blob([value], { type: 'image/jpg' }), payload.nombre + payload.dni + payload.apellido + payload.legajo);
                    setUploadImage(bodyFormData)
                }
                postImage(bodyFormData)
            }
        });
    };

  
    return (
        <div>
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Col>
                            <Form onSubmit={handleSubmit} className="update-form" >

                                <Form.Item label="Nombre" >
                                    {getFieldDecorator('nombre', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            name="nombre"
                                            placeholder="nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Apellido">
                                    {getFieldDecorator('apellido', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="apellido"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Legajo">
                                    {getFieldDecorator('legajo', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="legajo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="DNI">
                                    {getFieldDecorator('dni', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="dni"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Foto" >
                                    {getFieldDecorator('foto', {
                                        rules: [{ required: true, message: 'Suba un archivo .png!' }],
                                    })(
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                        >
                                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                        </Upload>,
                                    )}
                                </Form.Item>
                                <Form.Item label="Fecha">
                                    {getFieldDecorator('fecha', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="date"
                                            placeholder="{data.fecha}"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Row></Row>
                                    <Button type="primary" htmlType="submit" className="update-form-button" >
                                        Enviar
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
const WrappedCrearpersonaForm = Form.create({ name: 'crearpersona' })(Crearpersona);
export default WrappedCrearpersonaForm