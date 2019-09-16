import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {PageHeader,Row, Col  } from 'antd';
import WrappedNormalLoginForm from './components/login/Login';

function App() {
  const [data, setData] = useState([]); 

  const axiosInstance = axios.create({
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTY4NTUwODE0LCJleHAiOjE1NjkxNTU2MTR9.25EW7Y24UKafhODIGnFfHg2rgZPKtTgk0GqzjzY5B7iqeSuDMnO2E0L6U3BgMFxogilkTZcmF0GzWv844HNkGQ',
      'Content-Type': 'application/json'
    }
  });

  useEffect(() => {
    
    let fetchData = async () => {
      let response = await axiosInstance.get('http://localhost:8080/api/')
      setData(response.data)
      //console.log(response.headers);
    }
    fetchData();

  }, [axiosInstance]);

  return (
    <React.Fragment>
        <PageHeader onBack={() => null} title="RRHH" subTitle="Bienvenido" />
   Inicie sesion para continuar
   <Row>
        <Col span={4}>
          
   <WrappedNormalLoginForm />
   </Col>
    </Row>
    </React.Fragment>
  );
}

export default App
    /*  <div className="App">
        <Button type="primary">Button</Button>
      </div>
      Inicie sesion para continuar
       {data.map(item => (
         <li key={item.id}>
              {item.nombre}
            </li>
            ))} */
  /*  async function fetchData() {
  useEffect(() => {
     const fetchData = async () => {
       const result = await axios(
         'http://localhost:8080/api/',
       );
       setData(result.data);
     };
     fetchData();
   }, []); 
  
      /*  axiosInstance.get('http://localhost:8080/api/').then((result) => {
         setData(result.data)
         console.log(result.headers);
       }); */
