/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from 'react';
import './App.css';
import axios from 'axios';
import { PageHeader, Row, Col, Icon, Input, Button, Layout } from 'antd';
import Particles from 'react-particles-js';

import WrappedNormalLoginForm from './components/login/Login';
import { useSelector, connect } from 'react-redux' 
import store from './redux/store'
import Theme from './components/ColorPicker/theme'
const { Header, Content, Footer, Sider } = Layout;
 
function App() {
  const [data, setData] = useState([]); 
  const [role, setRole] = useState([])
  const [state, setState] = useState({ vars: { '@primary-color': '#dddddd' } })
  const isRoleUser = role === 'USER' || role === 'ADMIN';

  
  useEffect(() => {
    setRole(store.getState().Role)
    let isSubscribed = true
    let reduxsub
    if (isSubscribed) {
    const fetchData = async () => {
      reduxsub = store.subscribe( async () => {
        const response = await axios.get('http://localhost:8080/rrhh-server/api/', {
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
      <Row type="flex" justify="start">
        <Col span={6}>
          <br />
          <br />
     {/*      <Theme></Theme> */}
        </Col>
      </Row>

      <Particles
      /* params={{
        "particles": {
          "line_linked": {
            "color": "#000"
          },
          "number": {
            "value": 90
          },
          "size": {
            "value": 5
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse" //"grab" | "push" | "remove" | "bubble" | "repulse"
            }
          }
        }
      }} */
        params={{
          "particles": {
            "number": {
              "value": 190,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "color": {
              "value": "#000"
            },
            "line_linked": {
              "enable": true,
              "color": "#000",
              "opacity": 0.3
            },
            "size": {
              "value": 2
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }}
        style={{
          width: '100%',
          background: `transparent`
        }}
      />

     {/*  <Row>
        <Col xs={16}>Primary Color: <Input onChange={onChange} /></Col>
        <Col xs={24}><Button type="primary" onClick={updateVars}>Update Vars</Button></Col>
      </Row>
 */}
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
