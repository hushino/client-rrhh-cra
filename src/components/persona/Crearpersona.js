/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect, Component } from 'react';
import axios from 'axios';
import * as Scroll from 'react-scroll';
import { Card,Alert, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
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
    //const [data, setData] = useState([])
    /* const [imagestate, setImagestate] = useState({ loading: false })
    const [uploadImage, setUploadImage] = useState({})
    const [state, setState] = useState({})
    
     
    let truedata = null;
    let truedata = null; 
    const reader = new FileReader();
    //console.log(dataIndex);
    const { getFieldDecorator } = props.form;*/

    payload = {
        nombre: "nombrefake",
        apellido: "nombrefake",
        foto: "nombrefakefoto",
        legajo: "nombrefake",
        dni: 23,
        /* fecha: "nombre", */
        apodo: "apodo",
        cuit: 423,
        soltero: "soltero",
        casado: "casado",
        conviviente: "conviviente",
        viudo: "viudo",
        domicilio: "domicilio",
        lugar: "lugar",
        calle: "calle",
        numero: 432,
        telefonofijo: 23,
        numerodecelular: 23,
        oficioprofecion: "oficioprofecion",
        niveldeestudios: "niveldeestudios",
        gruposanguineo: "gruposanguineo",
        donante: "donante",
        diabetes: "diabetes",
        hipertension: "hipertension",
        alergias: "alergias",
        asma: "asma",
        otros: "otros",
        fechadeingreso: "fechadeingreso",
        resolucion: "resolucion",
        categoria: "categoria",
        item: "item",
        planta: "planta",
        area: "area",
        direccion: "direccion",
        annos: 23,
        meses: 43,
        dias: 23,
        realizocomputodeservicios: "realizocomputodeservicios",
        poseeconocimientoenmaquinasviales: "poseeconocimientoenmaquinasviales",
        familiaracargonombre2: "familiaracargonombre2",
        familiaracargonombre: "familiaracargonombre",
        familiaracargodni2: 34,
        familiaracargodni: 43,
    };

    /*  function getBase64(img, callback) {
     
         reader.addEventListener('load', () => callback(reader.result));
         reader.readAsDataURL(img);
     }
    */
    /*   function beforeUpload(file) {
          
     
          const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
          if (!isJpgOrPng) {
              message.error('Solo puedes subir archivos JPG/PNG !');
          }
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isLt2M) {
              message.error('La imagen debe pesar menos de 2MB!');
          }
          return isJpgOrPng && isLt2M;
      }
    */
    bodyFormData = new FormData();

    //useEffect(() => { }, []);
    /* handleChange = info => {
       
       if (info.file.status === 'uploading') {
           setImagestate({ loading: true });
           return;
       }
       if (info.file.status === 'done') {
           message.success(`${info.file.name} imagen cargada exitosamente`);
    
           bodyFormData.append('image', new Blob([info.file.originFileObj], { type: 'image/jpg' }));
           setUploadImage(bodyFormData)
    
           getBase64(info.file.originFileObj, imageUrl =>
               setImagestate({
                   imageUrl,
                   loading: false,
               }),
           );
       }
    
    }; */

    /* const uploadButton = (
        <div >
            <Icon type={imagestate.loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Subir</div>
        </div>
    ); */

    postData = () => axios.post(`http://localhost:8080/rrhh-server/api/addPersona`, this.payload)
        .then(function (response) {
            //console.log(response.data)
            const info = () => {
                message.info('Exito al cargar');
              };
              info()
        })
        .catch(function (error) {
            const info2 = () => {
                message.info('Error al cargar');
              };
              info2()
            //console.log(error);
        })

    /* const postImage = (data) => axios.post("http://localhost:3003/upload", data)
        .then(function (response) {
            //console.log(response.data.filename)
            if (response.data.filename !== undefined) {
                //data.foto = response.data.filename
                payload.foto = response.data.filename
            }
            //payload.foto = response.data.filename
            postData()
        })
        .catch(function (response) {
            console.log(response);
        }) */


    //const { imageUrl } = imagestate;
    /* let state = ({
        selectedFile: 0,
    }) */
    onChangeHandler3 = event => {
        //console.log(event.target.files[0])
        //console.log(event.target.files[1])
        //console.log(event.target.files[2])
        let file = event.target.files;

        this.setState(() => ({
            selectedFile: file
          }));
       /*    
        this.state = {
            selectedFile: event.target.files,
        } */
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
           // this.payload.foto = res.data[0].filename

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
                this.payload.cuit = values.cuit
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


                /*  for (let value of uploadImage.getAll('image')) {
                     //console.log('asd ' + value);
                     bodyFormData.append('image', new Blob([value], { type: 'image/jpg' }), payload.nombre + payload.dni + payload.apellido + payload.legajo);
                     setUploadImage(bodyFormData)
                 } */

                this.onClickHandler(data)
                // setTimeout(function () { this.onClickHandler(data) }, 100);
                // onClickHandler(data)
                //  postImage(data)
            }
        });
    };
      success = () => {
        message
          .loading('Espere...')
      };
      
      
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (<div>
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                    {/*<Alert message="Success Text" type="success" /> */}
                        <Col>
                            <Form onSubmit={(event) => this.handleSubmit(event)} className="update-form" >

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
                                    <input onChange={this.onChangeHandler3}/* onChange={(evt) =>
                                       
                                            onChangeHandler3(evt)
                                        
                                    } */ multiple type="file" id="file-input-id" className="form-control" />
                                </div>
                                {/*  <Form.Item label="Foto" >
                                    {getFieldDecorator('foto', {
                                        rules: [{ required: true, message: 'Suba un archivo .png!' }],
                                    })(
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                        >
                                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                        </Upload>,
                                    )}
                                </Form.Item> */}
                                {/*  <Form.Item label="Fecha">
                                    {getFieldDecorator('fecha', {
                                        rules: [{ required: true, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="date"
                                            placeholder="{data.fecha}"
                                        />,
                                    )}
                                </Form.Item>
 */}
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
                                <Form.Item label="Cuit">
                                    {getFieldDecorator('cuit', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="number"
                                            placeholder="cuit"
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
                                <Form.Item label="Resolucion">
                                    {getFieldDecorator('resolucion', {
                                        rules: [{ required: false, message: 'Ingrese un dato!' }],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="resolucion"
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