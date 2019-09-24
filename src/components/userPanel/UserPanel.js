/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from '../../redux/store';
import { Table, Input, Button, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Highlighter from 'react-highlight-words';
import AdminPanel from '../adminPanel/AdminPanel';
//`${name.data.apellido} ${name.data.nombre}`

function UserPanel() {
    const [state, setState] = useState([])
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
    let integer = parseInt(localStorage.getItem("dni"), 10);
    let integer2 = parseInt(localStorage.getItem("legajo"), 10);
    const urls = {
        nombre: localStorage.getItem("nombre"),
        apellido: localStorage.getItem("apellido"),
        dni: integer,
        legajo: integer2,
    }
    /*  const megatron = (nombrepersona, apellidopersona) => {
         if (!apellidopersona === "" && !nombrepersona === "") {
             console.log('megatron ' + nombrepersona, apellidopersona)
             fetchData(nombrepersona, apellidopersona)
         }
     } */

    const fetchData = () => axios.post(`http://localhost:8080/api/home?page=${current}&size=${pageSize}&sortOrder=${sortOrder}`, urls)
        .then(function (response) {
            /* const asd = filters
            asd.forEach(element => {
                console.log('...filters ' + element);
            }); */
            //console.log('...sortField ' + current); // nombre
            //console.log('...sortOrder ' + pageSize); // ascend descend

            //if (urls != undefined) {
            /* console.log('response.nombrepersona:  ' + urls.nombre)
            console.log('response.apellidopersona:  ' + urls.apellido) */
            //}
            setLoading({ loading: true });
            const pagination = { ...loading.pagination };
            pagination.total = response.data.totalElements; //-10 bad
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
        setRole(store.getState().Role)
        localStorage.setItem("nombre", "");
        localStorage.setItem("apellido", "");
        localStorage.setItem("dni", "");
        localStorage.setItem("legajo", "");
    }, []);


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        if (dataIndex === "nombre") {
            if (selectedKeys !== "") {
                localStorage.setItem("nombre", selectedKeys);
            }
        }
        if (dataIndex === "apellido") {
            if (selectedKeys !== "") {
                localStorage.setItem("apellido", selectedKeys);
            }
        }
        if (dataIndex === "dni") {
            if (selectedKeys !== "") {
                localStorage.setItem("dni", selectedKeys);
            }
        }
        if (dataIndex === "legajo") {
            if (selectedKeys !== "") {
                localStorage.setItem("legajo", selectedKeys);
                console.log("legajo " + localStorage.getItem("legajo"))
            }
        }

        setState({ searchText: selectedKeys[0] });
    };

    const handleReset = clearFilters => {
        clearFilters();
        localStorage.setItem("nombre", "");
        localStorage.setItem("apellido", "");
        localStorage.setItem("dni", "");
        localStorage.setItem("legajo", "");
        setState({ searchText: '' });
    };
    let searchInput = null;
    let getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Buscar ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Buscar
        </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reiniciar
        </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            sorter: true,
            render: data => data,
            width: '20%',
            ...getColumnSearchProps('nombre'),
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            width: '20%',
            ...getColumnSearchProps('apellido'),
        },
        {
            title: 'Dni',
            dataIndex: 'dni',
            width: '20%',
            ...getColumnSearchProps('dni'),
        },
        {
            title: 'Legajo',
            dataIndex: 'legajo',
            width: '20%',
            ...getColumnSearchProps('legajo'),
        },
        {
            title: 'ID',
            dataIndex: 'id',
            width: '20%',
            ...getColumnSearchProps('id'),
        },
        {
            title: 'Accion',
            key: 'action',
            dataIndex: 'id',
            render: (dataIndex) => <Link to={`/viewpersona/${dataIndex}`}>Ver</Link>,
        },
        {
            title: 'Accion',
            key: 'action2',
            dataIndex: 'id',
            render: (dataIndex) => <Link to={`/${dataIndex}/agregarlicencia/`}>Editar</Link>,
        }

    ];




    return (
        <div>
            <h1>Panel de Usuario Autentificado</h1>
            <Table
                columns={columns}
                rowKey={record => record.id}
                dataSource={loading.data}
                pagination={loading.pagination}
                loading={loading.loading}
                onChange={handleTableChange}
            />


        </div>
    )
}

export default UserPanel