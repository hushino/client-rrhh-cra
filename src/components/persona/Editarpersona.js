/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Tabs, Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
import WrappedEditarLicenciaForm from './manyside/Editarlicencia'
import WrappedEditarAltasAscensosBajasForm from './manyside/altasAscensosBajas/EditarAltasAscensosBajas'
import WrappedEditarConceptoConocimientosEspecialesClasificacionPremiosForm from './manyside/ConceptoConocimientosEspecialesClasificacionPremios/EditarConceptoConocimientosEspecialesClasificacionPremios'
import WrappedEditarEmbargoForm from './manyside/embargos/EditarEmbargo'

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;

function Editarpersona(props) {

    const [data, setData] = useState([])

    const [uploadImage, setUploadImage] = useState({})

    const [imagestate, setImagestate] = useState({ loading: false })

    const { dataIndex } = props.match.params

    let truedata = null;

    const reader = new FileReader();
    //console.log(dataIndex);
    function getBase64(img, callback) {
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
            //console.log(response.data.filename)
            if (response.data.filename !== undefined) {
                data.foto = response.data.filename
            }
            data.foto = response.data.filename
            postData(truedata)
        })
        .catch(function (response) {
            console.log(response);
        })/* .then(() => {
            postData(data)
        }) */


    useLayoutEffect(() => {
        const getData = () => axios.get(`http://localhost:8080/api/viewpersona/${dataIndex}`)
            .then(function (response) {
                //console.log(response.data)
                setData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
        getData();

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
        //console.log(data.foto)

    }, [data]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                //console.log(values.nombre)//ok
                truedata = values
                setData(values)
                //console.log(uploadImage)
                postImage(uploadImage)
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
            bodyFormData.append('image', new Blob([info.file.originFileObj], { type: 'image/jpg' }), data.nombre + data.dni + data.apellido + data.legajo);

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
        < div >
            <Icon type={imagestate.loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Remplazar</div>
            <img src={`http://localhost:3003/upload/image/${data.foto}`} alt="avatar" style={{ width: '100%' }} />
        </div >
    );
    const { imageUrl } = imagestate;

    const { getFieldDecorator } = props.form;

    return (
        <div>
            <Layout style={{ /* background: "white" */ }}>

                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Editar Persona" key="1">
                                <Col>
                                    <h2>Actualizar datos de una persona</h2>
                                    <Form onSubmit={handleSubmit} className="update-form" >

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
                            </TabPane>
                            <TabPane tab="Editar Licencia" key="2">
                                <WrappedEditarLicenciaForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Altas Ascensos Bajas" key="3">
                                <WrappedEditarAltasAscensosBajasForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Concepto/Conocimientos/Especiales/Clasificacion/Premios" key="4">
                                <WrappedEditarConceptoConocimientosEspecialesClasificacionPremiosForm  personaid={data.id}/>
                            </TabPane>
                            <TabPane tab="Editar Embargo" key="5">
                                <WrappedEditarEmbargoForm  personaid={data.id}/>
                            </TabPane>
                          
                        </Tabs>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )
}
const WrappedEditarPersonaForm = Form.create({ name: 'editarPersona' })(Editarpersona);
export default WrappedEditarPersonaForm