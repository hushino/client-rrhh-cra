/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, Avatar, Row, Col, Layout, Form, Input, Button, Radio, Upload, message } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function AdminPanel() {

    
    return (
        <div>
            <Layout style={{ background: "white", height: "calc(100vh - 55px)" }}>
                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex" gutter={16}>
                        <Col>
                            <h2>Panel de administración</h2>
                            <Link to={`/crearpersona`}>Crear una nueva persona</Link>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Red Design ©2019 Created by Hushino</Footer>
            </Layout>
        </div>
    )
}

export default AdminPanel