/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, Avatar, Row, Col, Layout, Button } from 'antd';

const { Meta } = Card;
const { Footer, Content } = Layout;

function Viewpersona(props) {
    const [data, setData] = useState([])
    const { dataIndex } = props.match.params
    //console.log(dataIndex)
    const isRoleAdmin = localStorage.getItem("role") === 'ADMIN';

    const isAnyRole = localStorage.getItem("role") === 'USER' || localStorage.getItem("role") === "ADMIN";

    const fetchData = () => axios.get(`http://localhost:8080/api/viewpersona/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Layout style={{ /* background: "white", */ height: "calc(100vh - 55px)" }}>

                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Col>
                        {
                            isRoleAdmin   
                                    ?<Card
                                    style={{ marginTop: 12 }}
                                    
                                    actions={[
                                        <Link to={`/${dataIndex}/editar`}>
                                            <Icon type="edit" key="edit" /> </Link>,
                                    ]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={data.nombre}
                                        description={[
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido,
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido, "id: ", data.id,
                                            " apellido: ",
                                            data.apellido,
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido, "id: ", data.id,
                                            " apellido: ",
                                            data.apellido,
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido
                                        ]}
                                    />
                                </Card>
                                    : <Card
                                    style={{ marginTop: 12 }}
                                    
                                   >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={data.nombre}
                                        description={[
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido,
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido, "id: ", data.id,
                                            " apellido: ",
                                            data.apellido,
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido, "id: ", data.id,
                                            " apellido: ",
                                            data.apellido,
                                            "id: ", data.id,
                                            " apellido: ",
                                            data.apellido
                                        ]}
                                    />
                                </Card>

                                }
                            
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )

}
export default Viewpersona