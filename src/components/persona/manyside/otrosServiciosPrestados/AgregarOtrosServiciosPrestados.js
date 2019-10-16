/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';



function AgregarOtrosServiciosPrestados(props) {
    
    const { dataIndex } = props
    const { getFieldDecorator } = props.form;
    const postOtrosServicios = () => axios.post(`http://localhost:8080/rrhh-server/api/updatepersona/${dataIndex}/otrosServiciosPrestados`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        referencias: "nombrefake",
        fecha: "nombrefake",
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.referencias = values.referencias
                payload.fecha = values.fecha
                postOtrosServicios()
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="referencias" >
                {getFieldDecorator('referencias', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="referencias"
                        placeholder="referencias"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Fecha">
                {getFieldDecorator('fecha', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="date"
                        placeholder="fecha"
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
    )
}

const WrappedAgregarOtrosServiciosPrestadosForm = Form.create({ name: 'agregarOtrosServiciosPrestados' })(AgregarOtrosServiciosPrestados);
export default WrappedAgregarOtrosServiciosPrestadosForm