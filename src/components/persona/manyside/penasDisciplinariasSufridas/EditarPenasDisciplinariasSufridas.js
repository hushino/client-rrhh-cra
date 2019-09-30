/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Form, Input, Button } from 'antd';

function EditarPenasDisciplinariasSufridas(props){

let truedata = null;
const [data, setData] = useState([])
const personaidd = props.personaid;
const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${personaidd}/penasDisciplinariasSufridas/${data.id}`, values)
    .then(function (response) {
        //console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    })
useLayoutEffect(() => {
    console.log(personaidd);
    const getData = () => axios.get(`http://localhost:8080/api/penasDisciplinariasSufridas/${personaidd}`)
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
        expediente: data.expediente,
        fecha: data.fecha,
        referencias: data.observaciones,
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

        <Form.Item label="Expediente" >
            {getFieldDecorator('expediente', {
                rules: [{ required: true, message: 'Ingrese un dato!' }],
            })(
                <Input
                    type="number"
                    name="garantia"
                    placeholder={data.expediente}
                    setFieldsValue={data.expediente}
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
        <Form.Item label="Referencias">
            {getFieldDecorator('referencias', {
                rules: [{ required: true, message: 'Ingrese un dato!' }],
            })(
                <Input
                    type="text"
                    placeholder={data.referencias}
                    setFieldsValue={data.referencias}
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

const WrappedEditarPenasDisciplinariasSufridasForm = Form.create({ name: 'editarPenasDisciplinariasSufridas' })(EditarPenasDisciplinariasSufridas);
export default WrappedEditarPenasDisciplinariasSufridasForm