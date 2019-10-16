/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';


function AgregarPenasDisciplinariasSufridas(props) {
    const { dataIndex } = props
    const { getFieldDecorator } = props.form;
    const postEmbargo = () => axios.post(`http://localhost:8080/rrhh-server/api/updatepersona/${dataIndex}/penasDisciplinariasSufridas`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        expediente: "nombrefake",
        fecha: "nombrefake",
        referencias: "nombrefake",
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.expediente = values.expediente
                payload.fecha = values.fecha
                payload.referencias = values.referencias
                postEmbargo()
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="Expediente" >
                {getFieldDecorator('expediente', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        name="expediente"
                        placeholder="expediente"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Fecha">
                {getFieldDecorator('fecha', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="date"
                        placeholder="Fecha"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Referencias">
                {getFieldDecorator('referencias', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder="referencias"
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

const WrappedAgregarPenasDisciplinariasSufridasForm = Form.create({ name: 'agregarPenasDisciplinariasSufridas' })(AgregarPenasDisciplinariasSufridas);
export default WrappedAgregarPenasDisciplinariasSufridasForm