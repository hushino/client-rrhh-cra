/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect, Component } from 'react';
import axios from 'axios';
import * as Scroll from 'react-scroll';
import { Card, DatePicker, Alert, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
var scroll = Scroll.animateScroll;

class Crearpersona extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedFile: null };
        //this.handleSubmit = this.handleSubmit.bind
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    payload = {
        nombre: "",
        apellido: "",
        foto: "",
        legajo: "",
        dni: '',
        apodo: "",
        cuil: '',
        soltero: "",
        casado: "",
        conviviente: "",
        viudo: "",
        domicilio: "",
        lugar: "",
        calle: "",
        numero: '',
        telefonofijo: '',
        numerodecelular: '',
        oficioprofecion: "",
        niveldeestudios: "",
        gruposanguineo: "",
        factor: "",
        donante: "",
        diabetes: "",
        hipertension: "",
        alergias: "",
        asma: "",
        otros: "",
        fechadeingreso: "",
        resolucion: "",
        categoria: "",
        item: "",
        planta: "",
        area: "",
        direccion: "",
        annos: '',
        meses: '',
        dias: '',
        realizocomputodeservicios: "",
        poseeconocimientoenmaquinasviales: "",
        familiaracargonombre2: "",
        familiaracargonombre: "",
        familiaracargodni2: '',
        familiaracargodni: '',
        familiaracargonombre3: '',
        familiaracargonombre4: '',
        familiaracargonombre5: '',
        familiaracargodni3: '',
        familiaracargodni4: '',
        familiaracargodni5: '',
        familiaracargoedad: '',
        familiaracargoedad2: '',
        familiaracargoedad3: '',
        familiaracargoedad4: '',
        familiaracargoedad5: '',
        altura: '',
        estudiosincompletos: '',
        conyugeapellido: '',
        conyugenombre: '',
        conyugedni: '',
        conyugecuil: '',
        grupofamiliarapellidonombre: '',
        grupofamiliarapellidonombre2: '',
        grupofamiliarapellidonombre3: '',
        grupofamiliarapellidonombre4: '',
        grupofamiliarapellidonombre5: '',
        grupofamiliarapellidonombre6: '',
        grupofamiliarapellidonombre7: '',
        grupofamiliarapellidonombre8: '',
        grupofamiliarapellidonombre9: '',
        grupofamiliarapellidonombre10: '',
        grupofamiliarapellidonombre11: '',
        grupofamiliarapellidonombreedad: '',
        grupofamiliarapellidonombreedad2: '',
        grupofamiliarapellidonombreedad3: '',
        grupofamiliarapellidonombreedad4: '',
        grupofamiliarapellidonombreedad5: '',
        grupofamiliarapellidonombreedad6: '',
        grupofamiliarapellidonombreedad7: '',
        grupofamiliarapellidonombreedad8: '',
        grupofamiliarapellidonombreedad9: '',
        grupofamiliarapellidonombreedad10: '',
        grupofamiliarapellidonombreedad11: '',
        grupofamiliarapellidonombredni: '',
        grupofamiliarapellidonombredni2: '',
        grupofamiliarapellidonombredni3: '',
        grupofamiliarapellidonombredni4: '',
        grupofamiliarapellidonombredni5: '',
        grupofamiliarapellidonombredni6: '',
        grupofamiliarapellidonombredni7: '',
        grupofamiliarapellidonombredni8: '',
        grupofamiliarapellidonombredni9: '',
        grupofamiliarapellidonombredni10: '',
        grupofamiliarapellidonombredni11: '',
        grupofamiliarapellidonombrefamiliar: '',
        grupofamiliarapellidonombrefamiliar2: '',
        grupofamiliarapellidonombrefamiliar4: '',
        grupofamiliarapellidonombrefamiliar3: '',
        grupofamiliarapellidonombrefamiliar5: '',
        grupofamiliarapellidonombrefamiliar6: '',
        grupofamiliarapellidonombrefamiliar7: '',
        grupofamiliarapellidonombrefamiliar8: '',
        grupofamiliarapellidonombrefamiliar9: '',
        grupofamiliarapellidonombrefamiliar10: '',
        grupofamiliarapellidonombrefamiliar11: '',
        barrio: '',
    };


    postData = () => axios.post(`http://localhost:8080/rrhh-server/api/addPersona`, this.payload)
        .then(function (response) {
            //console.log(response.data)
            const info = () => {
                message.info('Exito al cargar');
            };
            info()
            scroll.scrollToTop();
            setTimeout(function () { window.location.reload(); }, 1200);
        })
        .catch(function (error) {
            const info2 = () => {
                message.info('Error al cargar');
            };
            info2()
            scroll.scrollToTop();
            setTimeout(function () { window.location.reload(); }, 1200);
        })


    onChangeHandler3 = event => {
        let file = event.target.files;
        this.setState(() => ({
            selectedFile: file
        }));
    }
    onClickHandler = (data) => {

        /* for (let x = 0; x < this.state.selectedFile.length; x++) {
            data.append('file', this.state.selectedFile[x])
        } */
        axios.post("http://localhost:3003/upload", data, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            //console.log(res.statusText)
            console.log(res.data)
            if (/* res.data[0] !== undefined && */ res.data.length >= 1) {
                this.payload.foto = res.data[0].filename
            }
            this.postData()
        }).catch(function (error) {
            this.postData()
          })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const data = new FormData()
                //state.selectedFile.length = 2
                if (this.state.selectedFile != null /* && this.state.selectedFile.length < 1 */) {
                    for (let x = 0; x < this.state.selectedFile.length; x++) {
                        data.append('file', this.state.selectedFile[x])
                    }
                }


                this.payload.apellido = values.apellido
                this.payload.nombre = values.nombre
                this.payload.dni = values.dni

                this.payload.legajo = values.legajo
                //payload.fecha = values.fecha.toString()

                this.payload.apodo = values.apodo
                this.payload.cuil = values.cuil
                this.payload.soltero = values.soltero
                this.payload.casado = values.casado
                this.payload.conviviente = values.conviviente
                this.payload.viudo = values.viudo
                this.payload.domicilio = values.domicilio
                this.payload.lugar = values.lugar
                this.payload.calle = values.calle
                this.payload.numero = values.numero
                this.payload.telefonofijo = values.telefonofijo
                this.payload.numerodecelular = values.numerodecelular
                this.payload.oficioprofecion = values.oficioprofecion
                this.payload.niveldeestudios = values.niveldeestudios
                this.payload.gruposanguineo = values.gruposanguineo
                this.payload.donante = values.donante
                this.payload.diabetes = values.diabetes
                this.payload.hipertension = values.hipertension
                this.payload.alergias = values.alergias
                this.payload.asma = values.asma
                this.payload.otros = values.otros
                this.payload.fechadeingreso = values.fechadeingreso
                this.payload.resolucion = values.resolucion
                this.payload.categoria = values.categoria
                this.payload.item = values.item
                this.payload.planta = values.planta
                this.payload.area = values.area
                this.payload.direccion = values.direccion
                this.payload.annos = values.annos
                this.meses = values.meses
                this.payload.dias = values.dias
                this.realizocomputodeservicios = values.realizocomputodeservicios
                this.payload.poseeconocimientoenmaquinasviales = values.poseeconocimientoenmaquinasviales

                this.casoemergenciacelular = values.casoemergenciacelular
                this.casoemergenciacelular2 = values.casoemergenciacelular2
                this.casoemergenciafijo2 = values.casoemergenciafijo2
                this.casoemergenciafijo = values.casoemergenciafijo
                this.casoemergencianombre = values.casoemergencianombre
                this.casoemergencianombre2 = values.casoemergencianombre2

                this.familiaracargodni = values.familiaracargodni
                this.familiaracargodni2 = values.familiaracargodni2
                this.familiaracargonombre = values.familiaracargonombre
                this.familiaracargonombre2 = values.familiaracargonombre2
                /* ----- */
                this.familiaracargonombre3 = values.familiaracargonombre3
                this.familiaracargonombre4 = values.familiaracargonombre4
                this.familiaracargonombre5 = values.familiaracargonombre5

                this.familiaracargodni3 = values.familiaracargodni3
                this.familiaracargodni4 = values.familiaracargodni4
                this.familiaracargodni5 = values.familiaracargodni5

                this.familiaracargoedad = values.familiaracargoedad
                this.familiaracargoedad = values.familiaracargoedad2
                this.familiaracargoedad = values.familiaracargoedad3
                this.familiaracargoedad = values.familiaracargoedad4
                this.familiaracargoedad = values.familiaracargoedad5

                this.altura = values.altura
                this.estudiosincompletos = values.estudiosincompletos


                this.conyugeapellido = values.conyugeapellido
                this.conyugenombre = values.conyugenombre
                this.conyugedni = values.conyugedni
                this.conyugecuil = values.conyugecuil

                this.grupofamiliarapellidonombre = values.grupofamiliarapellidonombre
                this.grupofamiliarapellidonombre2 = values.grupofamiliarapellidonombre2
                this.grupofamiliarapellidonombre3 = values.grupofamiliarapellidonombre3
                this.grupofamiliarapellidonombre4 = values.grupofamiliarapellidonombre4
                this.grupofamiliarapellidonombre5 = values.grupofamiliarapellidonombre5
                this.grupofamiliarapellidonombre6 = values.grupofamiliarapellidonombre6
                this.grupofamiliarapellidonombre7 = values.grupofamiliarapellidonombre7
                this.grupofamiliarapellidonombre8 = values.grupofamiliarapellidonombre8
                this.grupofamiliarapellidonombre9 = values.grupofamiliarapellidonombre9
                this.grupofamiliarapellidonombre10 = values.grupofamiliarapellidonombre10
                this.grupofamiliarapellidonombre11 = values.grupofamiliarapellidonombre11

                this.grupofamiliarapellidonombreedad = values.grupofamiliarapellidonombreedad
                this.grupofamiliarapellidonombreedad2 = values.grupofamiliarapellidonombreedad2
                this.grupofamiliarapellidonombreedad3 = values.grupofamiliarapellidonombreedad3
                this.grupofamiliarapellidonombreedad4 = values.grupofamiliarapellidonombreedad4
                this.grupofamiliarapellidonombreedad5 = values.grupofamiliarapellidonombreedad5
                this.grupofamiliarapellidonombreedad6 = values.grupofamiliarapellidonombreedad6
                this.grupofamiliarapellidonombreedad7 = values.grupofamiliarapellidonombreedad7
                this.grupofamiliarapellidonombreedad8 = values.grupofamiliarapellidonombreedad8
                this.grupofamiliarapellidonombreedad9 = values.grupofamiliarapellidonombreedad9
                this.grupofamiliarapellidonombreedad10 = values.grupofamiliarapellidonombreedad10
                this.grupofamiliarapellidonombreedad11 = values.grupofamiliarapellidonombreedad11

                this.grupofamiliarapellidonombredni = values.grupofamiliarapellidonombredni
                this.grupofamiliarapellidonombredni2 = values.grupofamiliarapellidonombredni2
                this.grupofamiliarapellidonombredni3 = values.grupofamiliarapellidonombredni3
                this.grupofamiliarapellidonombredni4 = values.grupofamiliarapellidonombredni4
                this.grupofamiliarapellidonombredni5 = values.grupofamiliarapellidonombredni5
                this.grupofamiliarapellidonombredni6 = values.grupofamiliarapellidonombredni6
                this.grupofamiliarapellidonombredni7 = values.grupofamiliarapellidonombredni7
                this.grupofamiliarapellidonombredni8 = values.grupofamiliarapellidonombredni8
                this.grupofamiliarapellidonombredni9 = values.grupofamiliarapellidonombredni9
                this.grupofamiliarapellidonombredni10 = values.grupofamiliarapellidonombredni10
                this.grupofamiliarapellidonombredni11 = values.grupofamiliarapellidonombredni11

                this.grupofamiliarapellidonombrefamiliar = values.grupofamiliarapellidonombrefamiliar
                this.grupofamiliarapellidonombrefamiliar2 = values.grupofamiliarapellidonombrefamiliar2
                this.grupofamiliarapellidonombrefamiliar4 = values.grupofamiliarapellidonombrefamiliar3
                this.grupofamiliarapellidonombrefamiliar3 = values.grupofamiliarapellidonombrefamiliar4
                this.grupofamiliarapellidonombrefamiliar5 = values.grupofamiliarapellidonombrefamiliar5
                this.grupofamiliarapellidonombrefamiliar6 = values.grupofamiliarapellidonombrefamiliar6
                this.grupofamiliarapellidonombrefamiliar7 = values.grupofamiliarapellidonombrefamiliar7
                this.grupofamiliarapellidonombrefamiliar8 = values.grupofamiliarapellidonombrefamiliar8
                this.grupofamiliarapellidonombrefamiliar9 = values.grupofamiliarapellidonombrefamiliar9
                this.grupofamiliarapellidonombrefamiliar10 = values.grupofamiliarapellidonombrefamiliar10
                this.grupofamiliarapellidonombrefamiliar11 = values.grupofamiliarapellidonombrefamiliar11

                this.barrio = values.barrio
                this.onClickHandler(data)

            }
        }, { passive: true });
    };


    success = () => {
        message
            .loading('Espere...')
    };


    render() {
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (<div>
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        {/*<Alert message="Success Text" type="success" /> */}
                        <Col>
                            <Form /* layout="inline"  */ onSubmit={(event) => this.handleSubmit(event)} className="update-form" >

                                <Form.Item label="Nombre" >
                                    {getFieldDecorator('nombre', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            name="nombre"
                                            placeholder="nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Apellido">
                                    {getFieldDecorator('apellido', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="apellido"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Legajo">
                                    {getFieldDecorator('legajo', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="legajo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="DNI">
                                    {getFieldDecorator('dni', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="dni"
                                        />,
                                    )}
                                </Form.Item>
                                <div className="form-group files">
                                    <label>Subir foto</label>
                                    <input onChange={this.onChangeHandler3}
                                        multiple type="file" id="file-input-id"
                                        className="form-control" />
                                </div>
                                <Form.Item label="Apodo">
                                    {getFieldDecorator('apodo', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="apodo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Cuil">
                                    {getFieldDecorator('cuil', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="cuil"
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
                                            placeholder="soltero"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Casado">
                                    {getFieldDecorator('casado', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="casado"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Conviviente">
                                    {getFieldDecorator('conviviente', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="conviviente"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Viudo">
                                    {getFieldDecorator('viudo', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="viudo"
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
                                            placeholder="domicilio"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Lugar">
                                    {getFieldDecorator('lugar', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="lugar"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Calle">
                                    {getFieldDecorator('calle', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="calle"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Numero de calle">
                                    {getFieldDecorator('numero', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="numero de calle"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Barrio">
                                    {getFieldDecorator('barrio', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="barrio"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Altura">
                                    {getFieldDecorator('altura', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="altura"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Telefono fijo">
                                    {getFieldDecorator('telefonofijo', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="telefono fijo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Numero de celular">
                                    {getFieldDecorator('numerodecelular', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="numero de celular"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Oficio/Profesion">
                                    {getFieldDecorator('oficioprofecion', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="oficio/profesion"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Nivel de estudios">
                                    {getFieldDecorator('niveldeestudios', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="nivel de estudios"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Estudios incompletos">
                                    {getFieldDecorator('estudiosincompletos', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="estudios incompletos"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo sanguineo">
                                    {getFieldDecorator('gruposanguineo', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="grupo sanguineo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Factor sanguineo">
                                    {getFieldDecorator('factor', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="factor sanguineo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Donante">
                                    {getFieldDecorator('donante', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="donante"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Diabetes">
                                    {getFieldDecorator('diabetes', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="diabetes"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Hipertension">
                                    {getFieldDecorator('hipertension', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="hipertension"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Alergias">
                                    {getFieldDecorator('alergias', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="alergias"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Asma">
                                    {getFieldDecorator('asma', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="asma"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Otros">
                                    {getFieldDecorator('otros', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="otros"
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
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI">
                                    {getFieldDecorator('grupofamiliarapellidonombredni', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Grupo familiar Familiar">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 2">
                                    {getFieldDecorator('grupofamiliarapellidonombre2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 2">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 2">
                                    {getFieldDecorator('grupofamiliarapellidonombredni2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 2">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 3">
                                    {getFieldDecorator('grupofamiliarapellidonombre3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 3">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 3">
                                    {getFieldDecorator('grupofamiliarapellidonombredni3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 3">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 4">
                                    {getFieldDecorator('grupofamiliarapellidonombre4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 4" >
                                    {getFieldDecorator('grupofamiliarapellidonombreedad4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 4">
                                    {getFieldDecorator('grupofamiliarapellidonombredni4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 4">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 5">
                                    {getFieldDecorator('grupofamiliarapellidonombre5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 5">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 5">
                                    {getFieldDecorator('grupofamiliarapellidonombredni5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 5 ">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 6">
                                    {getFieldDecorator('grupofamiliarapellidonombre6', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 6">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad6', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 6">
                                    {getFieldDecorator('grupofamiliarapellidonombredni6', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 6">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar6', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 7">
                                    {getFieldDecorator('grupofamiliarapellidonombre7', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 7">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad7', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 7">
                                    {getFieldDecorator('grupofamiliarapellidonombredni7', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 7">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar7', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 8">
                                    {getFieldDecorator('grupofamiliarapellidonombre8', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 8 ">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad8', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 8">
                                    {getFieldDecorator('grupofamiliarapellidonombredni8', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 8">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar8', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 9">
                                    {getFieldDecorator('grupofamiliarapellidonombre9', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 9">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad9', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 9">
                                    {getFieldDecorator('grupofamiliarapellidonombredni9', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 9">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar9', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Grupo familiar apellido y nombre 10">
                                    {getFieldDecorator('grupofamiliarapellidonombre10', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad 10">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad10', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI 10">
                                    {getFieldDecorator('grupofamiliarapellidonombredni10', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar 10">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar10', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar apellido y nombre 11">
                                    {getFieldDecorator('grupofamiliarapellidonombre11', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar apellido y nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar edad">
                                    {getFieldDecorator('grupofamiliarapellidonombreedad11', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar DNI">
                                    {getFieldDecorator('grupofamiliarapellidonombredni11', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="Grupo familiar DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Grupo familiar Familiar">
                                    {getFieldDecorator('grupofamiliarapellidonombrefamiliar11', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Grupo familiar tipo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Fecha de Ingreso">
                                    {getFieldDecorator('fechadeingreso', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="date"
                                            placeholder="fecha de Ingreso"
                                        />,
                                    )}
                                </Form.Item>

                                {/* <Form.Item label="Fecha de Ingreso">
                                    {getFieldDecorator('fechadeingreso', config)(<DatePicker />)}
                                </Form.Item> */}
                                <Form.Item label="Inst.legal">
                                    {getFieldDecorator('resolucion', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Inst.legal"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Categoria">
                                    {getFieldDecorator('categoria', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="categoria"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Item">
                                    {getFieldDecorator('item', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="item"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Planta">
                                    {getFieldDecorator('planta', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="planta"
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
                                            placeholder="area"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Direccion">
                                    {getFieldDecorator('direccion', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="direccion"
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
                                            placeholder="años"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Meses">
                                    {getFieldDecorator('meses', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="meses"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Dias">
                                    {getFieldDecorator('dias', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="dias"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Realizo computo de servicios">
                                    {getFieldDecorator('realizocomputodeservicios', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="realizo computo de servicios"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Posee conocimientos en maquinas viales">
                                    {getFieldDecorator('poseeconocimientoenmaquinasviales', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="especificar"
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
                                            placeholder="en caso emergencia numero celular"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="En caso de emergencia celular">
                                    {getFieldDecorator('casoemergenciacelular2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="en caso emergencia numero celular 2"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="En caso de emergencia telefono fijo">
                                    {getFieldDecorator('casoemergenciafijo', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="En caso de emergencia fijo"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="En caso de emergencia telefono fijo 2">
                                    {getFieldDecorator('casoemergenciafijo2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="En caso de emergencia fijo 2"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="En caso emergencia nombre">
                                    {getFieldDecorator('casoemergencianombre', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="En caso emergencia nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="En caso emergencia nombre 2">
                                    {getFieldDecorator('casoemergencianombre2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="En caso emergencia nombre 2"
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
                                            placeholder="familiar a cargo nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo DNI">
                                    {getFieldDecorator('familiaracargodni', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo dni"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo edad">
                                    {getFieldDecorator('familiaracargoedad', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo edad"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo nombre 2">
                                    {getFieldDecorator('familiaracargonombre2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="familiar a cargo nombre 2"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Familiar acargo DNI 2">
                                    {getFieldDecorator('familiaracargodni2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo dni 2"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo edad 2">
                                    {getFieldDecorator('familiaracargoedad2', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo edad 2"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo nombre 3">
                                    {getFieldDecorator('familiaracargonombre3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="familiar a cargo nombre 3"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo DNI 3">
                                    {getFieldDecorator('familiaracargodni3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo dni 3"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo edad 3">
                                    {getFieldDecorator('familiaracargoedad3', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo edad 3"
                                        />,
                                    )}
                                </Form.Item>


                                <Form.Item label="Familiar acargo nombre 4">
                                    {getFieldDecorator('familiaracargonombre4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="familiar a cargo nombre 4"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo DNI 4">
                                    {getFieldDecorator('familiaracargodni4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo dni 4"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo edad 4">
                                    {getFieldDecorator('familiaracargoedad4', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo edad 4"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Familiar acargo nombre 5">
                                    {getFieldDecorator('familiaracargonombre5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="familiar a cargo nombre 5"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo DNI 5">
                                    {getFieldDecorator('familiaracargodni5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo dni 5"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Familiar acargo edad 5">
                                    {getFieldDecorator('familiaracargoedad5', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="familiar a cargo edad 5"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="Conyuge nombre">
                                    {getFieldDecorator('conyugenombre', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Conyuge nombre"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Conyuge apellido">
                                    {getFieldDecorator('conyugeapellido', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="Conyuge apellido"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Conyuge DNI">
                                    {getFieldDecorator('conyugedni', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="conyuge DNI"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Conyuge CUIL">
                                    {getFieldDecorator('conyugecuil', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="conyuge CUIL"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    <Row></Row>
                                    <Button onClick={this.success} type="primary" htmlType="submit" className="update-form-button" >
                                        Enviar
                                    </Button>
                                </Form.Item>
                            </Form>
                            <Button onClick={this.scrollToTop}>Hacia el cielo!</Button>
                        </Col>
                        <br />
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
        );
    }
}
const WrappedCrearpersonaForm = Form.create({ name: 'crearpersona' })(Crearpersona);
export default WrappedCrearpersonaForm