/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, Avatar, Row, Col, Layout, Button, Descriptions, Radio } from 'antd';
import './style.css'
import * as jsPDF from 'jspdf'

const { Meta } = Card;
const { Footer, Content } = Layout;

function Viewpersona(props) {
    const [data, setData] = useState(
        []

    )
    const [state, setState] = useState('small')
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
    const fetchData = () => axios.get(`http://localhost:8080/rrhh-server/api/viewpersona/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    useLayoutEffect(() => {

        /*   var doc = new jsPDF({
              orientation: 'landscape',
          })
  
          doc.text('Hello world!', 10, 10)
          doc.save('a4.pdf') */

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


    const eliminar = () => axios.delete(`http://localhost:8080/rrhh-server/api/delete/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    const activateLasers = () => {
        var doc = new jsPDF({
            /*    orientation: 'landscape' */
        })
        doc.text("Direccion de Recursos Humanos de la municipalidad de Clorinda", 20, 10)
        doc.text("Nombre: " + data.nombre, 10, 20)
        doc.text("Apellido: " + data.apellido, 10, 30)
        doc.text("Legajo: " + data.legajo, 10, 40)
        doc.text("Apodo: " + data.apodo, 10, 50)
        doc.text("Cuit: " + data.cuit, 10, 60)
        doc.text("Soltero: " + data.soltero, 10, 70)
        doc.text("Casado: " + data.casado, 10, 80)
        doc.text("Conviviente: " + data.conviviente, 10, 90)
        doc.text("Viudo: " + data.viudo, 10, 100)
        doc.text("Domicilio: " + data.domicilio, 10, 110)
        doc.text("Calle: " + data.calle, 10, 120)
        doc.text("Numero: " + data.numero, 10, 130)
        doc.text("Telefono fijo: " + data.telefonofijo, 10, 140)
        doc.text("Numero de celular: " + data.numerodecelular, 10, 150)
        doc.text("Oficio/Profecion: " + data.oficioprofecion, 10, 160)
        doc.text("Nivel de estudios: " + data.niveldeestudios, 10, 170)
        doc.text("Grupo sanguineo: " + data.gruposanguineo, 10, 180)
        doc.text("Diabetes: " + data.diabetes, 10, 190)
        doc.text("Hipertension: " + data.hipertension, 10, 200)
        doc.text("Alergias: " + data.alergias, 10, 210)
        doc.text("Asma: " + data.asma, 10, 220)
        doc.text("Fechadeingreso: " + data.fechadeingreso, 10, 230)
        doc.text("Resolucion: " + data.resolucion, 10, 240)
        doc.text("Categoria: " + data.categoria, 10, 250)
        doc.text("Item: " + data.item, 10, 260)
        doc.text("Planta: " + data.planta, 10, 270)
        doc.text("Direccion: " + data.direccion, 10, 280)
        doc.text("Años: " + data.annos, 10, 290)
        const ads = doc.addPage()
        ads.text("Meses: " + data.meses, 10, 10)
        ads.text("Familiar a cargo nombre: " + data.familiaracargonombre, 10, 20)
        ads.text("Familiar a cargo dni: " + data.familiaracargodni, 10, 30)
        ads.text("Familiar a cargo nombre 2: " + data.familiaracargonombre2, 10, 40)
        ads.text("Familiar a cargo dni 2: " + data.familiaracargodni2, 10, 340)
        ads.text("Realizo computo de servicios: " + data.realizocomputodeservicios, 10, 50)
        ads.text("Posee conocimiento en maquinas viales: " + data.poseeconocimientoenmaquinasviales, 10, 60)
        ads.text("En caso emergencia celular: " + data.casoemergenciacelular, 10, 70)
        ads.text("En caso emergencia celular 2: " + data.casoemergenciacelular2, 10, 80)
        ads.text("En caso emergencia fijo: " + data.casoemergenciafijo, 10, 90)
        ads.text("En caso emergencia fijo2: " + data.casoemergenciafijo2, 10, 100)
        ads.text("En caso emergencia nombre: " + data.casoemergencianombre, 10, 110)
        ads.text("En caso emergencia nombre 2: " + data.casoemergencianombre2, 10, 120)
        doc.save('a4.pdf')
    }
    return (
        <Layout style={{ /* background: "white", */ }}>
            <Content style={{ padding: '0 50px' }}>
                <Row type="flex" gutter={16}>
                    <Col>
                        <div style={{ marginTop: 12 }}>
                            <Radio.Group onChange={onChange} value={state.size}>
                                <Radio value="default">Por defecto</Radio>
                                <Radio value="middle">Medio</Radio>
                                <Radio value="small">Compacto</Radio>
                            </Radio.Group>
                            <div>
                                <br />
                                <Button onClick={activateLasers} type="primary">Desacargar PDF</Button>
                            </div>
                            <br />
                            <br />
                            <Avatar shape="square" icon="user" size={164} src={`http://localhost:3003/uploads/` + data.foto} />
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
                                <Descriptions.Item label="Posee conocimientos en maquinas viales">{data.poseeconocimientoenmaquinasviales}</Descriptions.Item>
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
                        <div>
                            Usuarios que han echo cambios aqui:
                        </div>
                        <h4>{usuriosmod}</h4>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
        </Layout>
    )

}
export default Viewpersona