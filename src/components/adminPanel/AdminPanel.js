import React from 'react';
import { Row, Col } from 'antd';

function AdminPanel() {
    return (
        <div>
            <h2>Panel de administración</h2>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
        </div>
    )
}

export default AdminPanel