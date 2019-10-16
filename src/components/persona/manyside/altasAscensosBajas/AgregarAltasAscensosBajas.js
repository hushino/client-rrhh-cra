/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';


function AgregarAltasAscensosBajas(props) {

    const { dataIndex } = props
    const { getFieldDecorator } = props.form;
    const postLicencia = () => axios.post(`http://localhost:8080/rrhh-server/api/updatepersona/${dataIndex}/altasAscensosBajas`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        cargo: "nombrefake",
        fecha: "nombrefake",
        observaciones: "nombrefake",
        expediente: "nombrefake",
        prestaservicioen: "nombrefake",
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.cargo = values.cargo
                payload.fecha = values.fecha
                payload.observaciones = values.observaciones
                payload.expediente = values.expediente
                payload.prestaservicioen = values.prestaservicioen
                postLicencia()
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="Cargo" >
                {getFieldDecorator('cargo', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="cargo"
                        placeholder="cargo"
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
            <Form.Item label="Expediente">
                {getFieldDecorator('expediente', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder="expediente"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Presta servicio en:">
                {getFieldDecorator('prestaservicioen', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder="presta servicio en"
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

const WrappedCrearAgregarAltasAscensosBajasForm = Form.create({ name: 'agregarAltasAscensosBajas' })(AgregarAltasAscensosBajas);
export default WrappedCrearAgregarAltasAscensosBajasForm