/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect,useRef } from 'react';
import {Row, Form, Input, Button} from 'antd';
import axios from 'axios';

function ConceptoConocimientosEspecialesClasificacionPremios(props) {
 
    let truedata = null;
    let idManyside = null
    const refContainer = useRef(null);
    const [data, setData] = useState([])
    const personaidd = props.personaid;
    const postData = (values) => axios.post(`http://localhost:8080/api/updatepersona/${personaidd}/conceptoConocimientosEspecialesClasificacionPremios/${refContainer.current}`, values)
        .then(function (response) {
            //console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    useLayoutEffect(() => {
        console.log(personaidd);
        const getData = () => axios.get(`http://localhost:8080/api/conceptoConocimientosEspecialesClasificacionPremios/${personaidd}`)
            .then(function (response) {
                //idManyside = response.data.id
                refContainer.current = response.data.id
                setData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
        getData();

    }, [personaidd])

    useEffect(() => {
        props.form.setFieldsValue({
            referencias: data.referencias,
            fecha: data.fecha,
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

        <Form.Item label="Referencias" >
            {getFieldDecorator('referencias', {
                rules: [{ required: true, message: 'Ingrese un dato!' }],
            })(
                <Input
                    name="referencias"
                    placeholder={data.referencias}
                    setFieldsValue={data.referencias}
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
        
        <Form.Item>
            <Row></Row>
            <Button type="primary" htmlType="submit" className="update-form-button" >
                Enviar
            </Button>
        </Form.Item>
    </Form> 
 )
}
const WrappedEditarConceptoConocimientosEspecialesClasificacionPremiosForm = Form.create({ name: 'EditarConceptoConocimientosEspecialesClasificacionPremios' })(ConceptoConocimientosEspecialesClasificacionPremios);
export default WrappedEditarConceptoConocimientosEspecialesClasificacionPremiosForm

 