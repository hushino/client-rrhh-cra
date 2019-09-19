/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function Editarpersona(props) {
    const [data, setData] = useState([])
    const [post, setPost] = useState([])
    const [only, setOnly] = useState(0)
    const [uploadImage, setUploadImage] = useState({})

    const [imagestate, setImagestate] = useState({ loading: false })

    const { dataIndex } = props.match.params

    //console.log(dataIndex);
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
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

    const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${dataIndex}`, values)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    const postImage = (bodyFormData) => axios.post("http://localhost:3003/upload", bodyFormData)
        .then(function (response) {
            //handle success
            console.log(response.data + "-----" + bodyFormData);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


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
            foto: data.foto,
            fecha: data.fecha,
        });
    }, [data]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                /* const bodyFormData = new FormData();
                bodyFormData.append('image', new Blob([uploadImage], { type: 'image/jpg' })); */
                postImage(uploadImage)
                //bodyFormData.append(new Blob('image', values.foto, { type: 'jpg/png' }))
                //postImage(bodyFormData)
                /*  postImage(values.foto).then((e) => {
                     console.log('valuess ' + e)
                     values.foto = "una foto"
                     postData(values);
                 }); */
            }
        });
    };

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setImagestate({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            message.success(`${info.file.name} imagen cargada exitosamente`);


            const bodyFormData = new FormData();
            bodyFormData.append('image', new Blob([info.file.originFileObj], { type: 'image/jpg' }));

            //postImage(info.file.originFileObj)
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
        <div>
            <Icon type={imagestate.loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Subir</div>
        </div>
    );
    const { imageUrl } = imagestate;

    const { getFieldDecorator } = props.form;

    return (
        <div>
            <Layout style={{ background: "white" }}>

                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Col>
                            <h2>Actualizar datos de una persona</h2>
                            <Form onSubmit={handleSubmit} className="update-form" enctype='multipart/form-data'>

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