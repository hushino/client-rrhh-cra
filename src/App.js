/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from 'react';
import './App.css';
import axios from 'axios';
import {PageHeader,Row, Col,Icon,Input,Button  } from 'antd';
import WrappedNormalLoginForm from './components/login/Login';
import { useSelector, connect } from 'react-redux' 
import store from './redux/store'
 
 
function App() {
  const [data, setData] = useState([]); 
  const [role, setRole] = useState([])
  const [state, setState] = useState({ vars: { '@primary-color': '#dddddd' } })
  const isRoleUser = role === 'USER' || role === 'ADMIN';

  //const state = { vars: { '@primary-color': '#dddddd' } }
  const onChange = (e) => {
    const color = e.target.value;
    if (color.match(/^#[a-f0-9]{3,6}$/i)) {
      const vars = state.vars;
      vars['@primary-color'] = color;
      setState({ vars });
    }
  }
  const updateVars = () => {
    window.less.modifyVars(state.vars).then(() => {
      console.log('Theme updated successfully');
    });
  }

  useEffect(() => {
    setRole(store.getState().Role)
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
      <PageHeader onBack={() => null} backIcon={<Icon type="appstore" />} title="RRHH" subTitle="Bienvenido" />
      {/*  
        isRoleUser
          ? ''
          : 'Inicie sesion para continuar' */}
        
   
   <Row>
      <Col span={1}></Col>
      <Col span={6}>
       <WrappedNormalLoginForm />
      </Col>
      </Row>
      <Row>
        <Col xs={16}>Primary Color: <Input onChange={onChange} /></Col>
        <Col xs={24}><Button type="primary" onClick={updateVars}>Update Vars</Button></Col>

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
