/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';

function Agregarembargos(props) {
    const { dataIndex } = props
    const { getFieldDecorator } = props.form;
    const postEmbargo = () => axios.post(`http://localhost:8080/api/updatepersona/${dataIndex}/embargos`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        juzgado: "nombrefake",
        fecha: "nombrefake",
        acreedor: "nombrefake",
        expediente: "nombrefake",
        fianzaODeudaPropia: "nombrefake",
        origenDeLaDeuda: "nombrefake",
        observaciones: "nombrefake",
        levantada: "nombrefake",
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.juzgado = values.juzgado
                payload.fecha = values.fecha
                payload.acreedor = values.acreedor
                payload.cantidad = values.cantidad
                payload.expediente = values.expediente
                payload.fianzaODeudaPropia = values.fianzaODeudaPropia
                payload.origenDeLaDeuda = values.origenDeLaDeuda
                payload.observaciones = values.observaciones
                payload.levantada = values.levantada
                postEmbargo()
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="Juzgado" >
                {getFieldDecorator('juzgado', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="juzgado"
                        placeholder="juzgado"
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
                        type="number"
                        placeholder="expediente"
                    />,
                )}
            </Form.Item>

            <Form.Item label="Acreedor">
                {getFieldDecorator('acreedor', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder="acreedor"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Cantidad">
                {getFieldDecorator('cantidad', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder="cantidad"
                    />,
                )}
            </Form.Item>
            <Form.Item label="FianzaODeudaPropia">
                {getFieldDecorator('fianzaODeudaPropia', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder="fianzaODeudaPropia"
                    />,
                )}
            </Form.Item>
            <Form.Item label="OrigenDeLaDeuda">
                {getFieldDecorator('origenDeLaDeuda', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder="origenDeLaDeuda"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Levantada">
                {getFieldDecorator('levantada', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder="levantada"
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
const WrappedAgregarembargosForm = Form.create({ name: 'agregarembargos' })(Agregarembargos);
export default WrappedAgregarembargosForm