/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from '../../redux/store';
import { Table } from 'antd';
//`${name.data.apellido} ${name.data.nombre}`
const columns = [
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        sorter: true,
        render: data => data,
        width: '20%',
    },
    {
        title: 'Apellido',
        dataIndex: 'apellido',
        filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
        width: '20%',
    },
    {
        title: 'Dni',
        dataIndex: 'dni',
        width: '20%',
    },
    {
        title: 'Id',
        dataIndex: 'id',
        width: '20%',
    },
];


function UserPanel() {
    //const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [role, setRole] = useState([])



    let current = 0
    let pageSize = 10
    // eslint-disable-next-line
    let sortField = ''
    let sortOrder = ''
    const isRoleUser = role === 'USER';
    //const isRoleAdmin = role === 'ADMIN';

    const handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...loading.pagination };
        pager.current = pagination.current;
        setLoading({
            pagination: pager,
        });
        pageSize = pagination.pageSize
        current = pagination.current - 1
        sortField = sorter.field
        sortOrder = sorter.order
        setLoading({ loading: true });
        fetchData();
        /* fetchData({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        }); */
    };
    const fetchData = () => axios.get(`http://localhost:8080/api/home?page=${current}&size=${pageSize}&sortOrder=${sortOrder}`)
        .then(function (response) {
            /* const asd = filters
            asd.forEach(element => {
                console.log('...filters ' + element);
            }); */
            //console.log('...sortField ' + sortField); // nombre
            // console.log('...sortOrder ' + sortOrder); // ascend descend

            /* console.log('...results ' + results);
            console.log('...page ' + page); */
            // handle success
            //console.log('aaaaa ' + response.data.content);
            //setData(response.data)
            setLoading({ loading: true });
            const pagination = { ...loading.pagination };
            pagination.total = response.data.totalElements;
            setLoading({
                loading: false,
                data: response.data.content,
                pagination,
            });
        })
        .catch(function (error) {
            console.log(error);
        })



    useEffect(() => {
        fetchData();
        /* const fetchData = async () => {
        const response = await axios.post(`http://localhost:8080/api/home?page=${number}`)
        setData(response.data)}
        fetchData() */
        setRole(store.getState().Role)

    }, []);



    return (
        <div>
            <h1>Panel de Usuario Autentificado</h1>
            {//user@gmail.com
                isRoleUser
                    ? <Table
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={loading.data}
                        pagination={loading.pagination}
                        loading={loading.loading}
                        onChange={handleTableChange}
                    />
                    : <h5>Primero inicie sesion </h5>
            }

        </div>
    )
}

export default UserPanel