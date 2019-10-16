/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';


function EditarEmbargo(props) {
    let truedata = null;
    const [data, setData] = useState([])
    const personaidd = props.personaid;
    const postData = (values) => axios.post(`http://localhost:8080/rrhh-server/api/updatepersona/${personaidd}/updateembargos/${data.id}`, values)
        .then(function (response) {
            //console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    useLayoutEffect(() => {
        console.log(personaidd);
        const getData = () => axios.get(`http://localhost:8080/rrhh-server/api/embargos/${personaidd}`)
            .then(function (response) {
                setData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
        getData();

    }, [personaidd])

    useEffect(() => {

        props.form.setFieldsValue({
            juzgado: data.juzgado,
            fecha: data.fecha,
            expediente: data.expediente,
            observaciones: data.observaciones,
            acreedor: data.acreedor,
            cantidad: data.cantidad,
            fianzaODeudaPropia: data.fianzaODeudaPropia,
            origenDeLaDeuda: data.origenDeLaDeuda,
            levantada: data.levantada,
        });

    }, [data]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                truedata = values
                setData(values)
                postData(truedata)
            }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <Form onSubmit={handleSubmit} className="update-form" >

            <Form.Item label="Juzgado" >
                {getFieldDecorator('juzgado', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="juzgado"
                        placeholder={data.juzgado}
                        setFieldsValue={data.juzgado}
                    />,
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
            <Form.Item label="Observaciones">
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
            <Form.Item label="Expediente">
                {getFieldDecorator('expediente', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder={data.expediente}
                        setFieldsValue={data.expediente}
                    />,
                )}
            </Form.Item>

            <Form.Item label="Acreedor">
                {getFieldDecorator('acreedor', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder={data.acreedor}
                        setFieldsValue={data.acreedor}
                    />,
                )}
            </Form.Item>
            <Form.Item label="Cantidad">
                {getFieldDecorator('cantidad', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder={data.observaciones}
                        setFieldsValue={data.observaciones}
                    />,
                )}
            </Form.Item>
            <Form.Item label="FianzaODeudaPropia">
                {getFieldDecorator('fianzaODeudaPropia', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder={data.fianzaODeudaPropia}
                        setFieldsValue={data.fianzaODeudaPropia}
                    />,
                )}
            </Form.Item>
            <Form.Item label="OrigenDeLaDeuda">
                {getFieldDecorator('origenDeLaDeuda', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder={data.origenDeLaDeuda}
                        setFieldsValue={data.origenDeLaDeuda}
                    />,
                )}
            </Form.Item>
            <Form.Item label="Levantada">
                {getFieldDecorator('levantada', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="number"
                        placeholder={data.levantada}
                        setFieldsValue={data.levantada}
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


const WrappedEditarEmbargoForm = Form.create({ name: 'editarEmbargoForm' })(EditarEmbargo);
export default WrappedEditarEmbargoForm