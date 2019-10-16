/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';


function AgregarGarantia(props) {
    const { dataIndex } = props
    const { getFieldDecorator } = props.form;
    const postEmbargo = () => axios.post(`http://localhost:8080/rrhh-server/api/updatepersona/${dataIndex}/garantia`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        presentadaFecha: "nombrefake",
        garantia: "nombrefake",
        observaciones: "nombrefake",
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.garantia = values.garantia
                payload.observaciones = values.observaciones
                payload.presentadaFecha = values.presentadaFecha
                postEmbargo()
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="Garantia" >
                {getFieldDecorator('garantia', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="garantia"
                        placeholder="garantia"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Fecha">
                {getFieldDecorator('presentadaFecha', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="date"
                        placeholder="Presentada Fecha"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Observaciones">
                {getFieldDecorator('observaciones', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder="observaciones"
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

const WrappedAgregarGarantiaForm = Form.create({ name: 'agregarGarantia' })(AgregarGarantia);
export default WrappedAgregarGarantiaForm