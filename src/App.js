/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from 'react';
import './App.css';
import axios from 'axios';
import {PageHeader,Row, Col,Icon  } from 'antd';
import WrappedNormalLoginForm from './components/login/Login';
import { useSelector, connect } from 'react-redux' 
import store from './redux/store'
 
 
function App() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    let isSubscribed = true
    let reduxsub
    if (isSubscribed) {
    const fetchData = async () => {
      reduxsub = store.subscribe( async () => {
        const response = await axios.get('http://localhost:8080/api/', {
          headers: {
            Authorization: store.getState().Authorization
          }
        })
        setData(response.data)
      });
    }
      fetchData();
    }
    return () => {
      reduxsub()
      isSubscribed = false
    }

  }, []);
 
  return (
    <React.Fragment>
      
  <PageHeader onBack={() => null} /* backIcon={() => false} */ title="RRHH" subTitle="Bienvenido" />
   Inicie sesion para continuar
   <Col span={1}></Col>
   <Row>
      <Col span={1}></Col>
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
