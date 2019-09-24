/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
import axios from 'axios';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
//console.log(props.personaid) 
function Editarlicencia(props) {
    let truedata = null;
    const [data, setData] = useState([])
    const personaidd = props.personaid;
    const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${personaidd}/updatelicencia/${data.id}`, values)
        .then(function (response) {
            //console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    useLayoutEffect(() => {
        console.log(personaidd);
        const getData = () => axios.get(`http://localhost:8080/api/licencia/${personaidd}`)
            .then(function (response) {
                //console.log("datos de licencia ", response.data)
                setData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
        getData();

    }, [personaidd])

    useEffect(() => {

        props.form.setFieldsValue({
            fechaLicencia: data.fechaLicencia,
            referencias: data.referencias,
            numeroDeDias: data.numeroDeDias,
            observaciones: data.observaciones
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
                postData(truedata)
            }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <div>
            <Col>
                <h2>Editar licencia actual</h2>
                <Form onSubmit={handleSubmit} className="update-form" >
                    <Form.Item label="fechaLicencia">
                        {getFieldDecorator('fechaLicencia', {
                            rules: [{ required: true, message: 'Ingrese un dato!' }],
                        })(
                            <Input
                                type="date"
                                name="fechaLicencia"
                                placeholder={data.fechaLicencia}
                                setFieldsValue={data.fechaLicencia}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="referencias">
                        {getFieldDecorator('referencias', {
                            rules: [{ required: true, message: 'Ingrese un dato!' }],
                        })(
                            <Input
                                type="text"
                                placeholder={data.apellido}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="numeroDeDias">
                        {getFieldDecorator('numeroDeDias', {
                            rules: [{ required: true, message: 'Ingrese un dato!' }],
                        })(
                            <Input
                                type="number"
                                placeholder={data.legajo}
                                setFieldsValue={data.legajo}
                            />,
                        )}
                    </Form.Item>
                    

                    <Form.Item label="observaciones">
                        {getFieldDecorator('observaciones', {
                            rules: [{ required: true, message: 'Ingrese un dato!' }],
                        })(
                            <Input
                                type="text"
                                placeholder={data.observaciones}
                                setFieldsValue={data.observaciones}
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
        </div>
    )
}
const WrappedEditarLicenciaForm = Form.create({ name: 'editarPersona' })(Editarlicencia);
export default WrappedEditarLicenciaForm