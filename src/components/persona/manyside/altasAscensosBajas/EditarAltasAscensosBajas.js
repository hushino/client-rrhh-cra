/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';

function EditarAltasAscensosBajas(props) {
    let truedata = null;
    const [data, setData] = useState([])
    const personaidd = props.personaid;
    const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${personaidd}/updateAltasAscensosBajas/${data.id}`, values)
        .then(function (response) {
            //console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    useLayoutEffect(() => {
        console.log(personaidd);
        const getData = () => axios.get(`http://localhost:8080/api/altasAscensosBajas/${personaidd}`)
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
            cargo: data.cargo,
            fecha: data.fecha,
            expediente: data.expediente,
            observaciones: data.observaciones,
            prestaservicioen: data.prestaservicioen
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

            <Form.Item label="Cargo" >
                {getFieldDecorator('cargo', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="cargo"
                        placeholder={data.cargo}
                        setFieldsValue={data.cargo}
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
                        placeholder={data.expediente}
                        setFieldsValue={data.expediente}
                    />,
                )}
            </Form.Item>
            <Form.Item label="Expediente">
                {getFieldDecorator('expediente', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder={data.observaciones}
                        setFieldsValue={data.observaciones}
                    />,
                )}
            </Form.Item>
            <Form.Item label="Presta servicio en:">
                {getFieldDecorator('prestaservicioen', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="text"
                        placeholder={data.prestaservicioen}
                        setFieldsValue={data.prestaservicioen}
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

const WrappedEditarAltasAscensosBajasForm = Form.create({ name: 'editarAltasAscensosBajas' })(EditarAltasAscensosBajas);
export default WrappedEditarAltasAscensosBajasForm