/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Tabs, Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
import WrappedEditarLicenciaForm from './manyside/Editarlicencia'
import WrappedEditarAltasAscensosBajasForm from './manyside/altasAscensosBajas/EditarAltasAscensosBajas'
import WrappedEditarConceptoConocimientosEspecialesClasificacionPremiosForm from './manyside/ConceptoConocimientosEspecialesClasificacionPremios/EditarConceptoConocimientosEspecialesClasificacionPremios'
import WrappedEditarEmbargoForm from './manyside/embargos/EditarEmbargo'
import WrappedEditarGarantiaForm from './manyside/garantia/EditarGarantia'
import WrappedEditarOtrosServiciosPrestadosForm from './manyside/otrosServiciosPrestados/EditarOtrosServiciosPrestados'
import WrappedEditarPenasDisciplinariasSufridasForm from './manyside/penasDisciplinariasSufridas/EditarPenasDisciplinariasSufridas'
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;

function Editarpersona(props) {
    const [state, setState] = useState({ selectedFile: null })
    const [data, setData] = useState([])

    const [uploadImage, setUploadImage] = useState({})

    const [imagestate, setImagestate] = useState({ loading: false })

    const { dataIndex } = props.match.params

    let truedata = null;

    const postData = (values) => axios.post(`http://localhost:8080/rrhh-server/api/updatepersona/${dataIndex}`, values)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    useLayoutEffect(() => {
        const getData = () => axios.get(`http://localhost:8080/rrhh-server/api/viewpersona/${dataIndex}`)
            .then(function (response) {
                //console.log(response.data)
                setData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
        getData();

    }, [dataIndex])

    useEffect(() => {

        props.form.setFieldsValue({
            nombre: data.nombre,
            apellido: data.apellido,
            legajo: data.legajo,
            dni: data.dni,
            foto: data.foto,
            //fecha: data.fecha,
            usuariosModPersona: localStorage.getItem("nombreusuario"),
            apodo: data.apodo,
            cuit: data.cuit,
            soltero: data.soltero,
            casado: data.casado,
            conviviente: data.conviviente,
            viudo: data.viudo,
            domicilio: data.domicilio,
            lugar: data.lugar,
            calle: data.calle,
            numero: data.numero,
            telefonofijo: data.telefonofijo,
            numerodecelular: data.numerodecelular,
            oficioprofecion: data.oficioprofecion,
            niveldeestudios: data.niveldeestudios,
            gruposanguineo: data.gruposanguineo,
            donante: data.donante,
            diabetes: data.diabetes,
            hipertension: data.hipertension,
            alergias: data.alergias,
            asma: data.asma,
            otros: data.otros,
            fechadeingreso: data.fechadeingreso,
            resolucion: data.resolucion,
            categoria: data.categoria,
            item: data.item,
            planta: data.planta,
            area: data.area,
            direccion: data.direccion,
            annos: data.annos,
            meses: data.meses,
            dias: data.dias,
            realizocomputodeservicios: data.realizocomputodeservicios,
            poseeconocimientoenmaquinasviales: data.poseeconocimientoenmaquinasviales,

            familiaracargodni: data.familiaracargodni,
            familiaracargodni2: data.familiaracargodni2,
            familiaracargonombre: data.familiaracargonombre,
            familiaracargonombre2: data.familiaracargonombre2,

        });
        //console.log(data.foto)

    }, [data]);

    const onChangeHandler3 = event => {
        let file = event.target.files;
        setState(() => ({
            selectedFile: file
        }));
    }
    const onClickHandler = (data, values) => {

        /* for (let x = 0; x < this.state.selectedFile.length; x++) {
            data.append('file', this.state.selectedFile[x])
        } */
        axios.post("http://localhost:3003/upload", data, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            // console.log(res.data)
            if (/* res.data[0] !== undefined && */ res.data.length >= 1) {
                values.foto = res.data[0].filename
                data.foto = res.data[0].filename
            }
            //console.log(values.foto)
            postData(values)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const data = new FormData()
                //state.selectedFile.length = 2
                if (state.selectedFile != null /* && this.state.selectedFile.length < 1 */) {
                    for (let x = 0; x < state.selectedFile.length; x++) {
                        data.append('file', state.selectedFile[x])
                    }
                }

                truedata = values
                setData(values)

                //postImage(uploadImage)
                onClickHandler(data, values)
            }
        });
    };
    const { getFieldDecorator } = props.form;

    return (
        <div>
            <Layout style={{ /* background: "white" */ }}>

                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Editar Persona" key="1">
                                <Col>
                                    <h2>Actualizar datos de una persona</h2>
                                    <Form onSubmit={handleSubmit} className="update-form" >

                                        <Form.Item label="Nombre">
                                            {getFieldDecorator('nombre', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    name="nombre"
                                                    placeholder={data.nombre}
                                                    setFieldsValue={data.nombre}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Apellido">
                                            {getFieldDecorator('apellido', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.apellido}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Legajo">
                                            {getFieldDecorator('legajo', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.legajo}
                                                    setFieldsValue={data.legajo}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="DNI">
                                            {getFieldDecorator('dni', {
                                                rules: [{ required: true, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.dni}
                                                    setFieldsValue={data.dni}
                                                />,
                                            )}
                                        </Form.Item>

                                        <div className="form-group files">
                                            <label>Subir foto</label>
                                            <input onChange={onChangeHandler3}
                                                multiple type="file" id="file-input-id"
                                                className="form-control" />
                                        </div>

                                        <Form.Item label="">
                                            {getFieldDecorator('usuariosModPersona')(
                                                <Input
                                                    type="hidden"
                                                    placeholder="{data.usuario}"
                                                    setFieldsValue={localStorage.getItem("nombreusuario")}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Apodo">
                                            {getFieldDecorator('apodo', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.apodo}
                                                    setFieldsValue={data.apodo}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Cuit">
                                            {getFieldDecorator('cuit', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.cuit}
                                                    setFieldsValue={data.cuit}
                                                />,
                                            )}
                                        </Form.Item>
                                        <h3>Estado civil</h3>
                                        <Form.Item label="Soltero">
                                            {getFieldDecorator('soltero', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.soltero}
                                                    setFieldsValue={data.soltero}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Casado">
                                            {getFieldDecorator('casado', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.casado}
                                                    setFieldsValue={data.casado}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Conviviente">
                                            {getFieldDecorator('conviviente', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.conviviente}
                                                    setFieldsValue={data.conviviente}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Viudo">
                                            {getFieldDecorator('viudo', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.viudo}
                                                    setFieldsValue={data.vuido}
                                                />,
                                            )}
                                        </Form.Item>
                                        <h3>Docimicilio Real</h3>
                                        <Form.Item label="Domicilio">
                                            {getFieldDecorator('domicilio', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.domicilio}
                                                    setFieldsValue={data.domicilio}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Lugar">
                                            {getFieldDecorator('lugar', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.lugar}
                                                    setFieldsValue={data.lugar}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Calle">
                                            {getFieldDecorator('calle', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.calle}
                                                    setFieldsValue={data.calle}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Numero de calle">
                                            {getFieldDecorator('numero', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.numero}
                                                    setFieldsValue={data.numero}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Telefono fijo">
                                            {getFieldDecorator('telefonofijo', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.telefonofijo}
                                                    setFieldsValue={data.telefonofijo}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Numero de celular">
                                            {getFieldDecorator('numerodecelular', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.numerodecelular}
                                                    setFieldsValue={data.numerodecelular}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Oficio/Profecion">
                                            {getFieldDecorator('oficioprofecion', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.oficioprofecion}
                                                    setFieldsValue={data.oficioprofecion}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Nivel de estudios">
                                            {getFieldDecorator('niveldeestudios', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.niveldeestudios}
                                                    setFieldsValue={data.niveldeestudios}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo sanguineo">
                                            {getFieldDecorator('gruposanguineo', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.gruposanguineo}
                                                    setFieldsValue={data.gruposanguineo}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Donante">
                                            {getFieldDecorator('donante', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.donante}
                                                    setFieldsValue={data.donante}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Diabetes">
                                            {getFieldDecorator('diabetes', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.diabetes}
                                                    setFieldsValue={data.diabetes}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Hipertension">
                                            {getFieldDecorator('hipertension', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.hipertension}
                                                    setFieldsValue={data.hipertension}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Alergias">
                                            {getFieldDecorator('alergias', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.alergias}
                                                    setFieldsValue={data.alergias}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Asma">
                                            {getFieldDecorator('asma', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.asma}
                                                    setFieldsValue={data.asma}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Otros">
                                            {getFieldDecorator('otros', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.otros}
                                                    setFieldsValue={data.otros}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Fecha de Ingreso">
                                            {getFieldDecorator('fechadeingreso', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="date"
                                                    placeholder={data.fechadeingreso}
                                                    setFieldsValue={data.fechadeingreso}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Resolucion">
                                            {getFieldDecorator('resolucion', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.resolucion}
                                                    setFieldsValue={data.resolucion}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Categoria">
                                            {getFieldDecorator('categoria', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.categoria}
                                                    setFieldsValue={data.categoria}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Item">
                                            {getFieldDecorator('item', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.item}
                                                    setFieldsValue={data.item}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Planta">
                                            {getFieldDecorator('planta', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.planta}
                                                    setFieldsValue={data.planta}
                                                />,
                                            )}
                                        </Form.Item>
                                        <h3>Presta servicio actualmente en:</h3>
                                        <Form.Item label="Area">
                                            {getFieldDecorator('area', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.area}
                                                    setFieldsValue={data.area}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Direccion">
                                            {getFieldDecorator('direccion', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.direccion}
                                                    setFieldsValue={data.direccion}
                                                />,
                                            )}
                                        </Form.Item>
                                        <h3>Presta servicio en otras institucion publica o privada</h3>
                                        <Form.Item label="Años">
                                            {getFieldDecorator('annos', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.annos}
                                                    setFieldsValue={data.annos}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Meses">
                                            {getFieldDecorator('meses', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.meses}
                                                    setFieldsValue={data.meses}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Dias">
                                            {getFieldDecorator('dias', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.dias}
                                                    setFieldsValue={data.dias}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Realizo computo de servicios">
                                            {getFieldDecorator('realizocomputodeservicios', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.realizocomputodeservicios}
                                                    setFieldsValue={data.realizocomputodeservicios}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Posee conocimientos en maquinas viales">
                                            {getFieldDecorator('categoria', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.categoria}
                                                    setFieldsValue={data.categoria}
                                                />,
                                            )}
                                        </Form.Item>

                                        <h1>Contactos en caso de emergencia</h1>
                                        <Form.Item label="En caso de emergencia celular">
                                            {getFieldDecorator('casoemergenciacelular', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.casoemergenciacelular}
                                                    setFieldsValue={data.casoemergenciacelular}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="En caso de emergencia celular">
                                            {getFieldDecorator('casoemergenciacelular2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.casoemergenciacelular2}
                                                    setFieldsValue={data.casoemergenciacelular2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="En caso de emergencia telefono fijo">
                                            {getFieldDecorator('casoemergenciafijo', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.casoemergenciafijo}
                                                    setFieldsValue={data.casoemergenciafijo}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="En caso de emergencia telefono fijo 2">
                                            {getFieldDecorator('casoemergenciafijo2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.casoemergenciafijo2}
                                                    setFieldsValue={data.casoemergenciafijo2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="En caso emergencia nombre">
                                            {getFieldDecorator('casoemergencianombre', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.casoemergencianombre}
                                                    setFieldsValue={data.casoemergencianombre}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="En caso emergencia nombre 2">
                                            {getFieldDecorator('casoemergencianombre2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.casoemergencianombre2}
                                                    setFieldsValue={data.casoemergencianombre2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <h3>Familiares a cargo:</h3>
                                        <Form.Item label="Familiar acargo nombre">
                                            {getFieldDecorator('familiaracargonombre', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.familiaracargonombre}
                                                    setFieldsValue={data.familiaracargonombre}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo nombre 2">
                                            {getFieldDecorator('familiaracargonombre2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.familiaracargonombre2}
                                                    setFieldsValue={data.familiaracargonombre2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo DNI">
                                            {getFieldDecorator('familiaracargodni', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargodni}
                                                    setFieldsValue={data.familiaracargodni}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo DNI 2">
                                            {getFieldDecorator('familiaracargodni2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargodni2}
                                                    setFieldsValue={data.familiaracargodni2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Row></Row>
                                            <Button type="primary" htmlType="submit" className="update-form-button" >
                                                Enviar Actualizacion
                                    </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </TabPane>
                            <TabPane tab="Editar Licencia" key="2">
                                <WrappedEditarLicenciaForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Altas Ascensos Bajas" key="3">
                                <WrappedEditarAltasAscensosBajasForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Concepto/Conocimientos/Especiales/Clasificacion/Premios" key="4">
                                <WrappedEditarConceptoConocimientosEspecialesClasificacionPremiosForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Embargo" key="5">
                                <WrappedEditarEmbargoForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Garantia" key="6">
                                <WrappedEditarGarantiaForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Otros Servicios Prestados" key="7">
                                <WrappedEditarOtrosServiciosPrestadosForm personaid={data.id} />
                            </TabPane>
                            <TabPane tab="Editar Penas Disciplinarias Sufridas" key="8">
                                <WrappedEditarPenasDisciplinariasSufridasForm personaid={data.id} />
                            </TabPane>

                        </Tabs>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )
}
const WrappedEditarPersonaForm = Form.create({ name: 'editarPersona' })(Editarpersona);
export default WrappedEditarPersonaForm