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

    let partners = data.licencias && data.licencias.length > 0 ?
        data.licencias.map(licencias2 =>
            <span key={licencias2.id}>
                {licencias2.fechaLicencia}
            </span>
        ) : <span>cargando...</span>;
    
        let usuriosmod = data.detailUserTracks && data.detailUserTracks.length > 0 ?
        data.detailUserTracks.map(detailUserTracks2 =>
            <span key={detailUserTracks2.id}>
                {detailUserTracks2.name}
            </span>
        ) : <span>cargando...</span>;
    
    return (
        <div>
            <Layout style={{ /* background: "white", */ height: "calc(100vh - 55px)" }}>
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
                                    <Descriptions.Item label="DNI">{data.dni}</Descriptions.Item>
                                    <Descriptions.Item label="Licencia">
                                        {partners}
                                    </Descriptions.Item>
                                    {/*  <Descriptions.Item label="Config Info">
                                        Data disk type: MongoDB
                                    <br />
                                        Database version: 3.4
                                    <br />
                                        Package: dds.mongo.mid
                                    <br />
                                        Storage space: 10 GB
                                    <br />
                                        Replication_factor:3
                                    <br />
                                        Region: East China 1<br />
                                    </Descriptions.Item> */}
                                </Descriptions>
                                <br />
                                <br />

                                {
                                    isRoleAdmin
                                        ?
                                        <Descriptions title="Accion" size={state.size} >
                                            <Descriptions.Item label="Editar">
                                                <Link to={`/${dataIndex}/editar`}>
                                                    <Icon type="edit" key="edit" /></Link>
                                            </Descriptions.Item>
                                        </Descriptions>
                                        : ""}
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" gutter={16}>
                        <Col>
                            <h1>{usuriosmod}</h1>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )

}
export default Viewpersona