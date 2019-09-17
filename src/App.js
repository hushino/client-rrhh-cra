/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from 'react';
import './App.css';
import axios from 'axios';
import {PageHeader,Row, Col,Icon  } from 'antd';
import WrappedNormalLoginForm from './components/login/Login';
import { useSelector, connect } from 'react-redux' 
import store from './redux/store'
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const mapStateToProps = (state) => {
  return {
    s: state.Authorization
  }
}
function App(props) {
  const [data, setData] = useState([]); 

  const asd = useSelector(state => state.Authorization)
 
  useEffect(() => {

    const fetchData = async () => {
      store.subscribe( async () => {
        const response = await axios.get('http://localhost:8080/api/', {
          headers: {
            Authorization: store.getState()
          }
        })
        setData(response.data)
      });
     
    }
    fetchData();

  }, []);
 
  return (
    <React.Fragment>
      
        <PageHeader onBack={() => null} /* backIcon={() => false} */ title="RRHH" subTitle="Bienvenido" />
   Inicie sesion para continuar
   <Col span={1}></Col>
    
      {data.map(item => (
        <li key={item.id}>
          {item.nombre}
        </li>
      ))}
   <Row>
      <Col span={1}></Col>
      <Col span={4}>
       <WrappedNormalLoginForm />
      </Col>
   </Row>
    </React.Fragment>
  );
}

export default connect()(App)
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
