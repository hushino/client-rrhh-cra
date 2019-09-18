import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Viewpersona(props) {
    const { dataIndex } = props.match.params
    const fetchData = () => axios.get(`http://localhost:8080/api/viewpersona/${dataIndex}`)
        .then(function (response) {
            console.log(response.data)

        })
        .catch(function (error) {
            console.log(error);
        })

    console.log(dataIndex)
    useEffect(() => {

        fetchData();

    });

    return (
        <div>
            asdasd
        </div>
    )

}
export default Viewpersona