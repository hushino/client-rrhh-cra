import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from '../../redux/store';

function UserPanel() {
    const [data, setData] = useState([])
    const [role, setRole] = useState([])

    const number = 0
    const isRoleUser = role === 'USER';
    const isRoleAdmin = role === 'ADMIN';

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.post(`http://localhost:8080/api/home?page=${number}`)
            setData(response.data)

        }
        fetchData()
        setRole(store.getState().Role)

    }, []);



    return (
        <div>
            <h1>UserPanel</h1>
            {//user@gmail.com
                isRoleUser
                    ? data.map(item => (
                        <li key={item.id}>
                            {item.nombre} : {item.fecha}
                        </li>
                    ))
                    : 'none'
            }

        </div>
    )
}

export default UserPanel