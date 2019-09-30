/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Tabs, Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
import WrappedCrearAgregarAltasAscensosBajasForm from '../manyside/altasAscensosBajas/AgregarAltasAscensosBajas'
import WrappedCrearAgregarConceptoConocimientosEspecialesClasificacionPremiosForm from '../manyside/ConceptoConocimientosEspecialesClasificacionPremios/AgregarConceptoConocimientosEspecialesClasificacionPremios'
import WrappedAgregarembargosForm from '../manyside/embargos/Agregarembargos'
import WrappedAgregarGarantiaForm from '../manyside/garantia/AgregarGarantia'
import WrappedAgregarOtrosServiciosPrestadosForm from '../manyside/otrosServiciosPrestados/AgregarOtrosServiciosPrestados'
import WrappedAgregarPenasDisciplinariasSufridasForm from './penasDisciplinariasSufridas/AgregarPenasDisciplinariasSufridas'
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;


function Agregarlicencia(props) {
    const { dataIndex } = props.match.params
    const { getFieldDecorator } = props.form;
    const postLicencia = () => axios.post(`http://localhost:8080/api/updatepersona/${dataIndex}/licencia`, payload)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    const payload = {
        fecha_licencia: "nombrefake",
        numeroDeDias: "nombrefake",
        observaciones: "nombrefake",
        referencias: "nombrefake",
        usuariosMod: "usuariosModfake",
    };
    const handleSubmit = (e) => {
        const nombreusuario = localStorage.getItem("nombreusuario")
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                payload.observaciones = values.observaciones
                payload.referencias = values.referencias
                payload.numeroDeDias = values.numeroDeDias
                payload.fechaLicencia = values.fechaLicencia
                payload.usuariosMod = nombreusuario
                postLicencia()
            }
        });
    };


    return (
        <div>
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Agregar licencia" key="1">
                                <Col>
                                    <Form onSubmit={handleSubmit} className="update-form" >

                                        <Form.Item label="Observaciones" >
                                            {getFieldDecorator('observaciones', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    name="observaciones"
                                                    placeholder="observaciones"
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
                                        <Form.Item label="Numero de dias de licencia">
                                            {getFieldDecorator('numeroDeDias', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder="numero de Dias"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Fecha">
                                            {getFieldDecorator('fechaLicencia', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="date"
                                                    placeholder="fechaLicencia"
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
                                </Col>
                            </TabPane>
                            <TabPane tab="Agregar Altas Ascensos Bajas" key="2">
                                < WrappedCrearAgregarAltasAscensosBajasForm dataIndex={dataIndex} />
                            </TabPane>
                            <TabPane tab="Agregar Concepto Conocimientos Especiales Clasificacion Premios" key="3">
                                <WrappedCrearAgregarConceptoConocimientosEspecialesClasificacionPremiosForm dataIndex={dataIndex} />
                            </TabPane>
                            <TabPane tab="Agregar Embargos" key="4">
                                <WrappedAgregarembargosForm dataIndex={dataIndex} />
                            </TabPane>
                            <TabPane tab="Agregar Garantia" key="5">
                                <WrappedAgregarGarantiaForm dataIndex={dataIndex} />
                            </TabPane>
                            <TabPane tab="Agregar Otros Servicios Prestados" key="6">
                                <WrappedAgregarOtrosServiciosPrestadosForm dataIndex={dataIndex} />
                            </TabPane>
                            <TabPane tab="Agregar Penas Disciplinarias Sufridas" key="7">
                                <WrappedAgregarPenasDisciplinariasSufridasForm dataIndex={dataIndex} />
                            </TabPane>
                        
                        </Tabs>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )
}
const WrappedCrearlicenciaForm = Form.create({ name: 'crearlicencia' })(Agregarlicencia);
export default WrappedCrearlicenciaForm