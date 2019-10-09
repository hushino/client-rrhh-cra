/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';
const { TextArea } = Input;

function AgregarConceptoConocimientosEspecialesClasificacionPremios(props) {

    const { dataIndex } = props
    const { getFieldDecorator } = props.form;
    const postLicencia = () => axios.post(`http://localhost:8080/api/updatepersona/${dataIndex}/conceptoConocimientosEspecialesClasificacionPremios`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        cargo: "nombrefake",
        fecha: "nombrefake"
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.referencias = values.referencias
                payload.fecha = values.fecha
                postLicencia()
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="Referencias" >
                {getFieldDecorator('referencias', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <TextArea rows={4}
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

const WrappedCrearAgregarConceptoConocimientosEspecialesClasificacionPremiosForm = Form.create({ name: 'agregarAltasAscensosBajas' })(AgregarConceptoConocimientosEspecialesClasificacionPremios);
export default WrappedCrearAgregarConceptoConocimientosEspecialesClasificacionPremiosForm