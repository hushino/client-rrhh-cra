/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, message, Avatar, Row, Col, Layout, Button, Descriptions, Radio } from 'antd';
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
        // console.log('size checked', e.target.value);
        setState({
            size: e.target.value,
        });
    };
    const fetchData = () => axios.get(`http://localhost:8080/rrhh-server/api/viewpersona/${dataIndex}`)
        .then(function (response) {
            // console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            const info = () => {
                message.info('Ocurrio un error al obtener datos');
            };
            info()
        })

    useLayoutEffect(() => {
        fetchData();
    }, [])

    /* useEffect(() => {
      }, []); */

    let licenciasget = data.licencias && data.licencias.length > 0 ?
        data.licencias.map(licencias2 =>
            <span key={licencias2.id}>
                <h4> Fecha de Licencia:  {licencias2.fechaLicencia}</h4>
                <h4> Referencias:  {licencias2.referencias}</h4>
                <h4> Numero de dias: {licencias2.numeroDeDias}</h4 >
                <h4>Observaciones: {licencias2.observaciones}</h4 >
                <br />
                <br />
            </span>
        ) : <span>...</span>;
    let penasDisciplinariasSufridasget = data.penasDisciplinariasSufridas && data.penasDisciplinariasSufridas.length > 0 ?
        data.penasDisciplinariasSufridas.map(penasDisciplinariasSufridas2 =>
            <span key={penasDisciplinariasSufridas2.id}>
                <h4> Fecha: {penasDisciplinariasSufridas2.fecha}</h4>
                <br />
                <h4>  Expediente: {penasDisciplinariasSufridas2.expediente}</h4>
                <br />
                <h4> Referencias: {penasDisciplinariasSufridas2.referencias}</h4 >
            </span>
        ) : <span>...</span>;
    let otrosServiciosPrestadosget = data.otrosServiciosPrestados && data.otrosServiciosPrestados.length > 0 ?
        data.otrosServiciosPrestados.map(otrosServiciosPrestados2 =>
            <span key={otrosServiciosPrestados2.id}>
                <h4> Fecha: {otrosServiciosPrestados2.fecha}</h4>
                <br />
                <h4>  Referencias: {otrosServiciosPrestados2.referencias}</h4 >
            </span>
        ) : <span>...</span>;

    let garantiasget = data.garantias && data.garantias.length > 0 ?
        data.garantias.map(garantias2 =>
            <span key={garantias2.id}>
                <h4>Garantia:  {garantias2.garantia}</h4>
                <br />
                <h4> Presentada Fecha: {garantias2.presentadaFecha}</h4>
                <br />
                <h4> Observaciones: {garantias2.observaciones}</h4>
            </span>
        ) : <span>...</span>;

    let embargosget = data.embargos && data.embargos.length > 0 ?
        data.embargos.map(embargos2 =>
            <span key={embargos2.id}>
                <h4> Fecha: {embargos2.fecha}</h4>
                <br />
                <h4> Juzgado: {embargos2.juzgado}</h4 >
                <br />
                <h4> Acreedor: {embargos2.acreedor}</h4 >
                <br />
                <h4>  Cantidad: {embargos2.cantidad}</h4 >
                <br />
                <h4>  Expediente: {embargos2.expediente}</h4 >
                <br />
                <h4>  Fianza o deuda propia: {embargos2.fianzaODeudaPropia}</h4 >
                <br />
                <h4>   Origen de la Deuda: {embargos2.origenDeLaDeuda}</h4 >
                <br />
                <h4> Observaciones: {embargos2.observaciones}</h4 >
                <br />
                <h4> Levantada: {embargos2.levantada}</h4 >
            </span>
        ) : <span>...</span>;

    let conceptoConocimientosEspecialesClasificacionPremios = data.conceptoConocimientosEspecialesClasificacionPremios && data.conceptoConocimientosEspecialesClasificacionPremios.length > 0 ?
        data.conceptoConocimientosEspecialesClasificacionPremios.map(conceptoConocimientosEspecialesClasificacionPremios2 =>
            <span key={conceptoConocimientosEspecialesClasificacionPremios2.id}>
                <h4>fecha:{conceptoConocimientosEspecialesClasificacionPremios2.fecha}</h4>
                <div></div>
                <h4> referencias:{conceptoConocimientosEspecialesClasificacionPremios2.referencias}</h4>
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
            const info = () => {
                message.info('Exito al Borrar');
            };
            info()
        })
        .catch(function (error) {
            const info = () => {
                message.info('Error al Borrar');
            };
            info()
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
        doc.text("Cuil: " + data.cuil, 10, 60)
        doc.text("Soltero: " + data.soltero, 10, 70)
        doc.text("Casado: " + data.casado, 10, 80)
        doc.text("Conviviente: " + data.conviviente, 10, 90)
        doc.text("Viudo: " + data.viudo, 10, 100)
        doc.text("Domicilio: " + data.domicilio, 10, 110)
        doc.text("Calle: " + data.calle, 10, 120)
        doc.text("Numero: " + data.numero, 10, 130)
        doc.text("Telefono fijo: " + data.telefonofijo, 10, 140)
        doc.text("Numero de celular: " + data.numerodecelular, 10, 150)
        doc.text("Oficio/Profesión: " + data.oficioprofecion, 10, 160)
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
                <Row type="flex" >
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
                            <Descriptions bordered column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} title="Informacion de una persona" size={state.size}>
                                <Descriptions.Item label="Nombre"> <h4>{data.nombre}</h4></Descriptions.Item>
                                <Descriptions.Item label="Apellido"><h4>{data.apellido}</h4></Descriptions.Item>
                                <Descriptions.Item label="Legajo"><h4>{data.legajo}</h4></Descriptions.Item>
                                <Descriptions.Item label="Apodo"><h4>{data.apodo}</h4></Descriptions.Item>
                                <Descriptions.Item label="Cuil"><h4>{data.cuil}</h4></Descriptions.Item>
                                <Descriptions.Item label="Soltero"><h4>{data.soltero}</h4></Descriptions.Item>
                                <Descriptions.Item label="Casado"><h4>{data.casado}</h4></Descriptions.Item>
                                <Descriptions.Item label="Conviviente"><h4>{data.conviviente}</h4></Descriptions.Item>
                                <Descriptions.Item label="Viudo"><h4>{data.viudo}</h4></Descriptions.Item>
                                <Descriptions.Item label="Domicilio"><h4>{data.domicilio}</h4></Descriptions.Item>
                                <Descriptions.Item label="Altura"><h4>{data.altura}</h4></Descriptions.Item>
                                <Descriptions.Item label="Lugar"><h4>{data.lugar}</h4></Descriptions.Item>
                                <Descriptions.Item label="Calle"><h4>{data.calle}</h4></Descriptions.Item>
                                <Descriptions.Item label="Numero de calle"><h4>{data.numero}</h4></Descriptions.Item>
                                <Descriptions.Item label="Telefono fijo"><h4>{data.telefonofijo}</h4></Descriptions.Item>
                                <Descriptions.Item label="Numero de celular"><h4>{data.numerodecelular}</h4></Descriptions.Item>
                                <Descriptions.Item label="Oficio/Profesión"><h4>{data.oficioprofecion}</h4></Descriptions.Item>
                                <Descriptions.Item label="Nivel de estudios"><h4>{data.niveldeestudios}</h4></Descriptions.Item>
                                <Descriptions.Item label="Estudios incompletos"><h4>{data.estudiosincompletos}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo sanguineo"><h4>{data.gruposanguineo}</h4></Descriptions.Item>
                                <Descriptions.Item label="Factor sanguineo"><h4>{data.factor}</h4></Descriptions.Item>
                                <Descriptions.Item label="Diabetes"><h4>{data.diabetes}</h4></Descriptions.Item>
                                <Descriptions.Item label="Hipertension"><h4>{data.hipertension}</h4></Descriptions.Item>
                                <Descriptions.Item label="Alergias"><h4>{data.alergias}</h4></Descriptions.Item>
                                <Descriptions.Item label="Asma"><h4>{data.asma}</h4></Descriptions.Item>
                                <Descriptions.Item label="Otros"><h4>{data.otros}</h4></Descriptions.Item>
                                <Descriptions.Item label="Fecha de Ingreso"><h4>{data.fechadeingreso}</h4></Descriptions.Item>
                                <Descriptions.Item label="Resolucion"><h4>{data.resolucion}</h4></Descriptions.Item>
                                <Descriptions.Item label="Categoria"><h4>{data.categoria}</h4></Descriptions.Item>
                                <Descriptions.Item label="Item"><h4>{data.item}</h4></Descriptions.Item>
                                <Descriptions.Item label="Planta"><h4>{data.planta}</h4></Descriptions.Item>
                                <Descriptions.Item label="Direccion"><h4>{data.direccion}</h4></Descriptions.Item>
                                <Descriptions.Item label="Años"><h4>{data.annos}</h4></Descriptions.Item>
                                <Descriptions.Item label="Meses"><h4>{data.meses}</h4></Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo nombre"><h4>{data.familiaracargonombre2}</h4></Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo nombre 2"><h4>{data.familiaracargonombre}</h4></Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo DNI"><h4>{data.familiaracargodni}</h4></Descriptions.Item>
                                <Descriptions.Item label="Familiar acargo DNI 2"><h4>{data.familiaracargodni2}</h4></Descriptions.Item>
                                <Descriptions.Item label="Realizo computo de servicios"><h4>{data.realizocomputodeservicios}</h4></Descriptions.Item>
                                <Descriptions.Item label="Posee conocimientos en maquinas viales"><h4>{data.poseeconocimientoenmaquinasviales}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia celular"><h4>{data.casoemergenciacelular}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia celular 2"><h4>{data.casoemergenciacelular2}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia telefono fijo"><h4>{data.casoemergenciafijo}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso de emergencia telefono fijo"><h4>{data.casoemergenciafijo2}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre"><h4>{data.casoemergencianombre}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre 2"><h4>{data.casoemergencianombre2}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre 3"><h4>{data.casoemergencianombre3}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre 4"><h4>{data.casoemergencianombre4}</h4></Descriptions.Item>
                                <Descriptions.Item label="En caso emergencia nombre 5"><h4>{data.casoemergencianombre5}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre"><h4>{data.grupofamiliarapellidonombre}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni"><h4>{data.grupofamiliarapellidonombredni}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad"><h4>{data.grupofamiliarapellidonombreedad}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo"><h4>{data.grupofamiliarapellidonombrefamiliar}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 2"><h4>{data.grupofamiliarapellidonombre2}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 2"><h4>{data.grupofamiliarapellidonombredni2}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 2"><h4>{data.grupofamiliarapellidonombreedad2}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 2"><h4>{data.grupofamiliarapellidonombrefamiliar2}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 3"><h4>{data.grupofamiliarapellidonombre3}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 3"><h4>{data.grupofamiliarapellidonombredni3}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 3"><h4>{data.grupofamiliarapellidonombreedad3}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 3"><h4>{data.grupofamiliarapellidonombrefamiliar3}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 4"><h4>{data.grupofamiliarapellidonombre4}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 4"><h4>{data.grupofamiliarapellidonombredni4}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 4"><h4>{data.grupofamiliarapellidonombreedad4}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 4"><h4>{data.grupofamiliarapellidonombrefamiliar4}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 5"><h4> {data.grupofamiliarapellidonombre5}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 5"><h4>{data.grupofamiliarapellidonombredni5}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 5"><h4>{data.grupofamiliarapellidonombreedad5}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 5"><h4>{data.grupofamiliarapellidonombrefamiliar5}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 6"><h4>{data.grupofamiliarapellidonombre6}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 6"><h4>{data.grupofamiliarapellidonombredni6}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 6"><h4>{data.grupofamiliarapellidonombreedad6}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 6"><h4>{data.grupofamiliarapellidonombrefamiliar6}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 7"><h4>{data.grupofamiliarapellidonombre7}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 7"><h4>{data.grupofamiliarapellidonombredni7}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 7"><h4>{data.grupofamiliarapellidonombreedad7}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 7"><h4>{data.grupofamiliarapellidonombrefamiliar7}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 8"><h4>{data.grupofamiliarapellidonombre8}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 8"><h4>{data.grupofamiliarapellidonombredni8}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 8"><h4>{data.grupofamiliarapellidonombreedad8}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 8"><h4>{data.grupofamiliarapellidonombrefamiliar8}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 9"><h4>{data.grupofamiliarapellidonombre9}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 9"><h4>{data.grupofamiliarapellidonombredni9}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 9"><h4>{data.grupofamiliarapellidonombreedad9}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 9"><h4>{data.grupofamiliarapellidonombrefamiliar9}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 10"><h4>{data.grupofamiliarapellidonombre10}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 10"><h4>{data.grupofamiliarapellidonombredni10}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 10"><h4>{data.grupofamiliarapellidonombreedad10}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 10"><h4>{data.grupofamiliarapellidonombrefamiliar10}</h4></Descriptions.Item>

                                <Descriptions.Item label="Grupo familiar nombre 11"><h4>{data.grupofamiliarapellidonombre11}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar dni 11"><h4>{data.grupofamiliarapellidonombredni11}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar tipo 11"><h4>{data.grupofamiliarapellidonombrefamiliar11}</h4></Descriptions.Item>
                                <Descriptions.Item label="Grupo familiar edad 11"><h4>{data.grupofamiliarapellidonombreedad11}</h4></Descriptions.Item>

                                <Descriptions.Item label="Conyuge apellido"><h4>{data.conyugeapellido}</h4></Descriptions.Item>
                                <Descriptions.Item label="Conyuge nombre"><h4>{data.conyugenombre}</h4></Descriptions.Item>
                                <Descriptions.Item label="Conyuge dni"><h4>{data.conyugedni}</h4></Descriptions.Item>
                                <Descriptions.Item label="Conyuge cuil"><h4>{data.conyugecuil}</h4></Descriptions.Item>


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
                            <h3>Usuarios que han echo cambios aqui:</h3>
                        </div>
                        <h4>{usuriosmod}</h4>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
        </Layout >
    )

}
export default Viewpersona