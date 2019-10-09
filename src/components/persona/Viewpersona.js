/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, Avatar, Row, Col, Layout, Button, Descriptions, Radio } from 'antd';
import './style.css'
import _ from 'lodash';
const { Meta } = Card;
const { Footer, Content } = Layout;

function Viewpersona(props) {
    const [data, setData] = useState(
        []

    )
    const [state, setState] = useState('default')
    const { dataIndex } = props.match.params
    //console.log(dataIndex)
    const isRoleAdmin = localStorage.getItem("role") === 'ADMIN';

    const isAnyRole = localStorage.getItem("role") === 'USER' || localStorage.getItem("role") === "ADMIN";
    const onChange = e => {
        console.log('size checked', e.target.value);
        setState({
            size: e.target.value,
        });
    };
    const fetchData = () => axios.get(`http://localhost:8080/api/viewpersona/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    useLayoutEffect(() => {
        fetchData();
    }, [])

    /* useEffect(() => {
      }, []); */

    let licenciasget = data.licencias && data.licencias.length > 0 ?
        data.licencias.map(licencias2 =>
            <span key={licencias2.id}>
                Fecha de Licencia:  {licencias2.fechaLicencia}
            </span>
        ) : <span>...</span>;
    let penasDisciplinariasSufridasget = data.penasDisciplinariasSufridas && data.penasDisciplinariasSufridas.length > 0 ?
        data.penasDisciplinariasSufridas.map(penasDisciplinariasSufridas2 =>
            <span key={penasDisciplinariasSufridas2.id}>
                Fecha: {penasDisciplinariasSufridas2.fecha}
                <br />
                Expediente: {penasDisciplinariasSufridas2.expediente}
                <br />
                Referencias: {penasDisciplinariasSufridas2.referencias}
            </span>
        ) : <span>...</span>;
    let otrosServiciosPrestadosget = data.otrosServiciosPrestados && data.otrosServiciosPrestados.length > 0 ?
        data.otrosServiciosPrestados.map(otrosServiciosPrestados2 =>
            <span key={otrosServiciosPrestados2.id}>
                Fecha: {otrosServiciosPrestados2.fecha}
                <br />
                Referencias:{otrosServiciosPrestados2.referencias}
            </span>
        ) : <span>...</span>;

    let garantiasget = data.garantias && data.garantias.length > 0 ?
        data.garantias.map(garantias2 =>
            <span key={garantias2.id}>
                Garantia:  {garantias2.garantia}
                <br />
                Presentada Fecha: {garantias2.presentadaFecha}
                <br />
                Observaciones: {garantias2.observaciones}
            </span>
        ) : <span>...</span>;

    let embargosget = data.embargos && data.embargos.length > 0 ?
        data.embargos.map(embargos2 =>
            <span key={embargos2.id}>
                Fecha: {embargos2.fecha}
                <br />
                Juzgado:  {embargos2.juzgado}
                <br />
                Acreedor: {embargos2.acreedor}
                <br />
                Cantidad: {embargos2.cantidad}
                <br />
                Expediente: {embargos2.expediente}
                <br />
                Fianza o deuda propia: {embargos2.fianzaODeudaPropia}
                <br />
                Origen de la Deuda: {embargos2.origenDeLaDeuda}
                <br />
                Observaciones:{embargos2.observaciones}
                <br />
                Levantada: {embargos2.levantada}
            </span>
        ) : <span>...</span>;

    let conceptoConocimientosEspecialesClasificacionPremios = data.conceptoConocimientosEspecialesClasificacionPremios && data.conceptoConocimientosEspecialesClasificacionPremios.length > 0 ?
        data.conceptoConocimientosEspecialesClasificacionPremios.map(conceptoConocimientosEspecialesClasificacionPremios2 =>
            <span key={conceptoConocimientosEspecialesClasificacionPremios2.id}>
                fecha:{conceptoConocimientosEspecialesClasificacionPremios2.fecha}
                <div></div>
                referencias:{conceptoConocimientosEspecialesClasificacionPremios2.referencias}
            </span>
        ) : <span>...</span>;

    let usuriosmod = data.detailUserTracks && data.detailUserTracks.length > 0 ?
        data.detailUserTracks.map(detailUserTracks2 =>
            <span key={detailUserTracks2.id}>
                {detailUserTracks2.name}
            </span>
        ) : <span>...</span>;


    const eliminar = () => axios.delete(`http://localhost:8080/api/delete/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    return (
        <Layout style={{ /* background: "white", */  }}>
            <Content style={{ padding: '0 50px' }}>
                <Row type="flex" gutter={16}>
                    <Col>
                        <div style={{ marginTop: 12 }}>
                            <Radio.Group onChange={onChange} value={state.size}>
                                <Radio value="default">Por defecto</Radio>
                                <Radio value="middle">Medio</Radio>
                                <Radio value="small">Compacto</Radio>
                            </Radio.Group>
                            <br />
                            <br />
                            <Descriptions bordered title="Informacion de una persona" size={state.size}>
                                <Descriptions.Item label="Nombre">{data.nombre}</Descriptions.Item>
                                <Descriptions.Item label="Apellido">{data.apellido}</Descriptions.Item>
                                <Descriptions.Item label="Legajo">{data.legajo}</Descriptions.Item>
                                <Descriptions.Item label="Apodo">{data.apodo}</Descriptions.Item>
                                <Descriptions.Item label="Cuit">{data.cuit}</Descriptions.Item>
                                <Descriptions.Item label="Soltero">{data.soltero}</Descriptions.Item>
                                <Descriptions.Item label="Casado">{data.casado}</Descriptions.Item>
                                <Descriptions.Item label="Conviviente">{data.conviviente}</Descriptions.Item>
                                <Descriptions.Item label="Viudo">{data.viudo}</Descriptions.Item>
                                <Descriptions.Item label="Domicilio">{data.domicilio}</Descriptions.Item>
                                <Descriptions.Item label="Lugar">{data.lugar}</Descriptions.Item>
                                <Descriptions.Item label="Calle">{data.calle}</Descriptions.Item>
                                <Descriptions.Item label="Numero de calle">{data.numero}</Descriptions.Item>
                                <Descriptions.Item label="Telefono fijo">{data.telefonofijo}</Descriptions.Item>
                                <Descriptions.Item label="Numero de celular">{data.numerodecelular}</Descriptions.Item>
                                <Descriptions.Item label="Oficio/Profecion">{data.oficioprofecion}</Descriptions.Item>
                                <Descriptions.Item label="Nivel de estudios">{data.niveldeestudios}</Descriptions.Item>
                                <Descriptions.Item label="Grupo sanguineo">{data.gruposanguineo}</Descriptions.Item>
                                <Descriptions.Item label="Diabetes">{data.diabetes}</Descriptions.Item>
                                <Descriptions.Item label="Hipertension">{data.hipertension}</Descriptions.Item>
                                <Descriptions.Item label="Alergias">{data.alergias}</Descriptions.Item>
                                <Descriptions.Item label="Asma">{data.asma}</Descriptions.Item>
                                <Descriptions.Item label="Otros">{data.otros}</Descriptions.Item>
                                <Descriptions.Item label="Fecha de Ingreso">{data.fechadeingreso}</Descriptions.Item>
                                <Descriptions.Item label="Resolucion">{data.resolucion}</Descriptions.Item>
                                <Descriptions.Item label="Categoria">{data.categoria}</Descriptions.Item>
                                <Descriptions.Item label="Item">{data.item}</Descriptions.Item>
                                <Descriptions.Item label="Planta">{data.planta}</Descriptions.Item>
                                <Descriptions.Item label="Direccion">{data.direccion}</Descriptions.Item>
                                <Descriptions.Item label="Años">{data.annos}</Descriptions.Item>
                                <Descriptions.Item label="Meses">{data.meses}</Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo nombre">{data.familiaracargonombre2}</Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo nombre 2">{data.familiaracargonombre}</Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo DNI">{data.familiaracargodni}</Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo DNI 2">{data.familiaracargodni2}</Descriptions.Item>
                                <Descriptions.Item label="Realizo computo de servicios">{data.realizocomputodeservicios}</Descriptions.Item>
                                <Descriptions.Item label="Posee conocimientos en maquinas viales">{data.categoria}</Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia celular">{data.casoemergenciacelular}</Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia celular 2">{data.casoemergenciacelular2}</Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia telefono fijo">{data.casoemergenciafijo}</Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia telefono fijo">{data.casoemergenciafijo2}</Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre">{data.casoemergencianombre}</Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre 2">{data.casoemergencianombre2}</Descriptions.Item>


                                <Descriptions.Item label="Licencia">
                                    {licenciasget}
                                </Descriptions.Item>

                                <Descriptions.Item label="Concepto Conocimientos Especiales Clasificacion Premios">
                                    {conceptoConocimientosEspecialesClasificacionPremios}
                                </Descriptions.Item>

                                <Descriptions.Item label="Embargo">
                                    {embargosget}
                                </Descriptions.Item>

                                <Descriptions.Item label="Garantia">
                                    {garantiasget}
                                </Descriptions.Item>

                                <Descriptions.Item label="Otros Servicios Prestados">
                                    {otrosServiciosPrestadosget}
                                </Descriptions.Item>

                                <Descriptions.Item label="Penas Disciplinarias Sufridas">
                                    {penasDisciplinariasSufridasget}
                                </Descriptions.Item>
                            </Descriptions>
                            <br />
                            <br />
                            {
                                isRoleAdmin
                                    ?
                                    <Descriptions title="Accion" size={state.size} >
                                        <Descriptions.Item label="Editar">
                                            <Link to={`/${dataIndex}/editar`}>

                                                <Button type="primary"> <Icon type="edit" key="edit" /> </Button>
                                            </Link>
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Eliminar">

                                            <Button type="primary" onClick={function (e) { eliminar() }}>  <Icon type="delete" key="delete" /> </Button>
                                        </Descriptions.Item>
                                    </Descriptions>
                                    : ""}

                        </div>
                    </Col>
                </Row>
                <Row type="flex" gutter={16}>
                    <Col>
                        <h4>{usuriosmod}</h4>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
        </Layout>
    )

}
export default Viewpersona