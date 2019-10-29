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
            cuil: data.cuil,
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


            familiaracargonombre3: data.familiaracargonombre3,
            familiaracargonombre4: data.familiaracargonombre4,
            familiaracargonombre5: data.familiaracargonombre5,
            familiaracargodni3: data.familiaracargodni3,
            familiaracargodni4: data.familiaracargodni4,
            familiaracargodni5: data.familiaracargodni5,
            familiaracargoedad: data.familiaracargoedad,

            familiaracargoedad2: data.familiaracargoedad2,
            familiaracargoedad3: data.familiaracargoedad3,
            familiaracargoedad4: data.familiaracargoedad4,
            familiaracargoedad5: data.familiaracargoedad5,
            altura: data.altura,
            estudiosincompletos: data.estudiosincompletos,
            conyugeapellido: data.conyugeapellido,
            conyugenombre: data.conyugenombre,
            conyugedni: data.conyugedni,
            conyugecuil: data.conyugecuil,
            grupofamiliarapellidonombre: data.grupofamiliarapellidonombre,
            grupofamiliarapellidonombre2: data.grupofamiliarapellidonombre2,
            grupofamiliarapellidonombre3: data.grupofamiliarapellidonombre3,
            grupofamiliarapellidonombre4: data.grupofamiliarapellidonombre4,
            grupofamiliarapellidonombre5: data.grupofamiliarapellidonombre5,
            grupofamiliarapellidonombre6: data.grupofamiliarapellidonombre6,
            grupofamiliarapellidonombre7: data.grupofamiliarapellidonombre7,
            grupofamiliarapellidonombre8: data.grupofamiliarapellidonombre8,
            grupofamiliarapellidonombre9: data.grupofamiliarapellidonombre9,
            grupofamiliarapellidonombre10: data.grupofamiliarapellidonombre10,
            grupofamiliarapellidonombre11: data.grupofamiliarapellidonombre11,
            grupofamiliarapellidonombreedad: data.grupofamiliarapellidonombreedad,
            grupofamiliarapellidonombreedad2: data.grupofamiliarapellidonombreedad2,
            grupofamiliarapellidonombreedad3: data.grupofamiliarapellidonombreedad3,
            grupofamiliarapellidonombreedad4: data.grupofamiliarapellidonombreedad4,
            grupofamiliarapellidonombreedad5: data.grupofamiliarapellidonombreedad5,
            grupofamiliarapellidonombreedad6: data.grupofamiliarapellidonombreedad6,
            grupofamiliarapellidonombreedad7: data.grupofamiliarapellidonombreedad7,
            grupofamiliarapellidonombreedad8: data.grupofamiliarapellidonombreedad8,
            grupofamiliarapellidonombreedad9: data.grupofamiliarapellidonombreedad9,
            grupofamiliarapellidonombreedad10: data.grupofamiliarapellidonombreedad10,
            grupofamiliarapellidonombreedad11: data.grupofamiliarapellidonombreedad11,
            grupofamiliarapellidonombredni: data.grupofamiliarapellidonombredni,
            grupofamiliarapellidonombredni2: data.grupofamiliarapellidonombredni2,
            grupofamiliarapellidonombredni3: data.grupofamiliarapellidonombredni3,
            grupofamiliarapellidonombredni4: data.grupofamiliarapellidonombredni4,
            grupofamiliarapellidonombredni5: data.grupofamiliarapellidonombredni5,
            grupofamiliarapellidonombredni6: data.grupofamiliarapellidonombredni6,
            grupofamiliarapellidonombredni7: data.grupofamiliarapellidonombredni7,
            grupofamiliarapellidonombredni8: data.grupofamiliarapellidonombredni8,
            grupofamiliarapellidonombredni9: data.grupofamiliarapellidonombredni9,
            grupofamiliarapellidonombredni10: data.grupofamiliarapellidonombredni10,
            grupofamiliarapellidonombredni11: data.grupofamiliarapellidonombredni11,


            grupofamiliarapellidonombrefamiliar: data.grupofamiliarapellidonombrefamiliar,
            grupofamiliarapellidonombrefamiliar2: data.grupofamiliarapellidonombrefamiliar2,
            grupofamiliarapellidonombrefamiliar4: data.grupofamiliarapellidonombrefamiliar4,
            grupofamiliarapellidonombrefamiliar3: data.grupofamiliarapellidonombrefamiliar3,
            grupofamiliarapellidonombrefamiliar5: data.grupofamiliarapellidonombrefamiliar5,
            grupofamiliarapellidonombrefamiliar6: data.grupofamiliarapellidonombrefamiliar6,
            grupofamiliarapellidonombrefamiliar7: data.grupofamiliarapellidonombrefamiliar7,
            grupofamiliarapellidonombrefamiliar8: data.grupofamiliarapellidonombrefamiliar8,
            grupofamiliarapellidonombrefamiliar9: data.grupofamiliarapellidonombrefamiliar9,
            grupofamiliarapellidonombrefamiliar10: data.grupofamiliarapellidonombrefamiliar10,
            grupofamiliarapellidonombrefamiliar11: data.grupofamiliarapellidonombrefamiliar11,



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
                                        <Form.Item label="Cuil">
                                            {getFieldDecorator('cuil', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.cuil}
                                                    setFieldsValue={data.cuil}
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
                                        <Form.Item label="Altura">
                                            {getFieldDecorator('altura', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.altura}
                                                    setFieldsValue={data.altura}
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
                                        <Form.Item label="Estudios incompletos">
                                            {getFieldDecorator('estudiosincompletos', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.estudiosincompletos}
                                                    setFieldsValue={data.estudiosincompletos}
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

                                        <h3>Grupo Familiar:(Cónyuge e hijos)</h3>

                                        <Form.Item label="Grupo familiar apellido y nombre">
                                            {getFieldDecorator('grupofamiliarapellidonombre', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre}
                                                    setFieldsValue={data.grupofamiliarapellidonombre}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI">
                                            {getFieldDecorator('grupofamiliarapellidonombredni', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni}
                                                />,
                                            )}
                                        </Form.Item>

                                        <Form.Item label="Grupo familiar Familiar">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 2">
                                            {getFieldDecorator('grupofamiliarapellidonombre2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre2}
                                                    setFieldsValue={data.grupofamiliarapellidonombre2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 2">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad2}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 2">
                                            {getFieldDecorator('grupofamiliarapellidonombredni2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni2}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 2">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar2}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 3">
                                            {getFieldDecorator('grupofamiliarapellidonombre3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre3}
                                                    setFieldsValue={data.grupofamiliarapellidonombre3}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 3">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad3}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad3}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 3">
                                            {getFieldDecorator('grupofamiliarapellidonombredni3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni3}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni3}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 3">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar3}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar3}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 4">
                                            {getFieldDecorator('grupofamiliarapellidonombre4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre4}
                                                    setFieldsValue={data.grupofamiliarapellidonombre4}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 4" >
                                            {getFieldDecorator('grupofamiliarapellidonombreedad4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad4}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad4}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 4">
                                            {getFieldDecorator('grupofamiliarapellidonombredni4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni4}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni4}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 4">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar4}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar4}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 5">
                                            {getFieldDecorator('grupofamiliarapellidonombre5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre5}
                                                    setFieldsValue={data.grupofamiliarapellidonombre5}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 5">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad5}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad5}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 5">
                                            {getFieldDecorator('grupofamiliarapellidonombredni5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni5}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni5}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 5 ">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar5}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar5}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 6">
                                            {getFieldDecorator('grupofamiliarapellidonombre6', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre6}
                                                    setFieldsValue={data.grupofamiliarapellidonombre6}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 6">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad6', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad6}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad6}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 6">
                                            {getFieldDecorator('grupofamiliarapellidonombredni6', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni6}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni6}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 6">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar6', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar6}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar6}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 7">
                                            {getFieldDecorator('grupofamiliarapellidonombre7', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre7}
                                                    setFieldsValue={data.grupofamiliarapellidonombre7}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 7">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad7', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad7}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad7}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 7">
                                            {getFieldDecorator('grupofamiliarapellidonombredni7', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni7}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni7}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 7">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar7', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar7}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar7}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 8">
                                            {getFieldDecorator('grupofamiliarapellidonombre8', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre8}
                                                    setFieldsValue={data.grupofamiliarapellidonombre8}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 8 ">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad8', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad8}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad8}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 8">
                                            {getFieldDecorator('grupofamiliarapellidonombredni8', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni8}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni8}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 8">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar8', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar8}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar8}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 9">
                                            {getFieldDecorator('grupofamiliarapellidonombre9', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre9}
                                                    setFieldsValue={data.grupofamiliarapellidonombre9}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 9">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad9', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad9}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad9}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 9">
                                            {getFieldDecorator('grupofamiliarapellidonombredni9', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni9}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni9}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 9">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar9', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar9}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar9}
                                                />,
                                            )}
                                        </Form.Item>

                                        <Form.Item label="Grupo familiar apellido y nombre 10">
                                            {getFieldDecorator('grupofamiliarapellidonombre10', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre10}
                                                    setFieldsValue={data.grupofamiliarapellidonombre10}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad 10">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad10', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad10}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad10}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI 10">
                                            {getFieldDecorator('grupofamiliarapellidonombredni10', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni10}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni10}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar 10">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar10', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar10}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar10}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar apellido y nombre 11">
                                            {getFieldDecorator('grupofamiliarapellidonombre11', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.grupofamiliarapellidonombre11}
                                                    setFieldsValue={data.grupofamiliarapellidonombre11}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar edad">
                                            {getFieldDecorator('grupofamiliarapellidonombreedad11', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombreedad11}
                                                    setFieldsValue={data.grupofamiliarapellidonombreedad11}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar DNI">
                                            {getFieldDecorator('grupofamiliarapellidonombredni11', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombredni11}
                                                    setFieldsValue={data.grupofamiliarapellidonombredni11}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Grupo familiar Familiar">
                                            {getFieldDecorator('grupofamiliarapellidonombrefamiliar11', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.grupofamiliarapellidonombrefamiliar11}
                                                    setFieldsValue={data.grupofamiliarapellidonombrefamiliar11}
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


                                        <Form.Item label="Familiar acargo edad 2">
                                            {getFieldDecorator('familiaracargoedad2', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargoedad2}
                                                    setFieldsValue={data.familiaracargoedad2}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo nombre 3">
                                            {getFieldDecorator('familiaracargonombre3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.familiaracargonombre3}
                                                    setFieldsValue={data.familiaracargonombre3}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo DNI 3">
                                            {getFieldDecorator('familiaracargodni3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargodni3}
                                                    setFieldsValue={data.familiaracargodni3}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo edad 3">
                                            {getFieldDecorator('familiaracargoedad3', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargoedad3}
                                                    setFieldsValue={data.familiaracargoedad3}
                                                />,
                                            )}
                                        </Form.Item>


                                        <Form.Item label="Familiar acargo nombre 4">
                                            {getFieldDecorator('familiaracargonombre4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.familiaracargonombre4}
                                                    setFieldsValue={data.familiaracargonombre4}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo DNI 4">
                                            {getFieldDecorator('familiaracargodni4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargodni4}
                                                    setFieldsValue={data.familiaracargodni4}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo edad 4">
                                            {getFieldDecorator('familiaracargoedad4', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargoedad4}
                                                    setFieldsValue={data.familiaracargoedad4}
                                                />,
                                            )}
                                        </Form.Item>

                                        <Form.Item label="Familiar acargo nombre 5">
                                            {getFieldDecorator('familiaracargonombre5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.familiaracargonombre5}
                                                    setFieldsValue={data.familiaracargonombre5}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo DNI 5">
                                            {getFieldDecorator('familiaracargodni5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargodni5}
                                                    setFieldsValue={data.familiaracargodni5}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Familiar acargo edad 5">
                                            {getFieldDecorator('familiaracargoedad5', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.familiaracargoedad5}
                                                    setFieldsValue={data.familiaracargoedad5}
                                                />,
                                            )}
                                        </Form.Item>

                                        <Form.Item label="Conyuge nombre">
                                            {getFieldDecorator('conyugenombre', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.conyugenombre}
                                                    setFieldsValue={data.conyugenombre}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Conyuge apellido">
                                            {getFieldDecorator('conyugeapellido', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.conyugeapellido}
                                                    setFieldsValue={data.conyugeapellido}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Conyuge DNI">
                                            {getFieldDecorator('conyugedni', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="number"
                                                    placeholder={data.conyugedni}
                                                    setFieldsValue={data.conyugedni}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Conyuge CUIL">
                                            {getFieldDecorator('conyugecuil', {
                                                rules: [{ required: false, message: 'Ingrese un dato!' }],
                                            })(
                                                <Input
                                                    type="text"
                                                    placeholder={data.conyugecuil}
                                                    setFieldsValue={data.conyugecuil}
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