/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';


function EditarGarantia(props) {
    let truedata = null;
    const [data, setData] = useState([])
    const personaidd = props.personaid;
    const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${personaidd}/updategarantia/${data.id}`, values)
        .then(function (response) {
            //console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    useLayoutEffect(() => {
        console.log(personaidd);
        const getData = () => axios.get(`http://localhost:8080/api/garantia/${personaidd}`)
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
            garantia: data.garantia,
            presentadaFecha: data.presentadaFecha,
            observaciones: data.observaciones,
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

            <Form.Item label="Garantia" >
                {getFieldDecorator('garantia', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        name="garantia"
                        placeholder={data.garantia}
                        setFieldsValue={data.garantia}
                    />,
                )}
            </Form.Item>
            <Form.Item label="Presentada Fecha">
                {getFieldDecorator('presentadaFecha', {
                    rules: [{ required: true, message: 'Ingrese un dato!' }],
                })(
                    <Input
                        type="date"
                        placeholder={data.presentadaFecha}
                        setFieldsValue={data.presentadaFecha}
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
            <Form.Item>
                <Row></Row>
                <Button type="primary" htmlType="submit" className="update-form-button" >
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    )
}

const WrappedEditarGarantiaForm = Form.create({ name: 'editarGarantia' })(EditarGarantia);
export default WrappedEditarGarantiaForm