/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { Button, Row, Menu, Icon, PageHeader } from 'antd';
import App from '../../App';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserPanel from '../userPanel/UserPanel';
import AdminPanel from '../adminPanel/AdminPanel';
import NoPageFound from '../noPageFound/NoPageFound';
import Viewpersona from '../persona/Viewpersona';
import store from '../../redux/store';
import WrappedEditarPersonaForm from '../persona/Editarpersona';
import WrappedCrearpersonaForm from '../persona/Crearpersona';
import WrappedCrearlicenciaForm from '../persona/manyside/Agregarlicencia'


function Header() {
  //const [data, setData] = useState([]);
  /*  const [data, setData] = useState([]);
   const isRoleUser = data === 'USER'; */
  const isRoleAdmin = localStorage.getItem("role") === 'ADMIN';

  const isAnyRole = localStorage.getItem("role") === 'USER' || localStorage.getItem("role") === "ADMIN";
 
  useEffect(() => {
    let reduxsub
    let isSubscribed = true
    if (isSubscribed) {
      reduxsub = store.subscribe(() => {
       
        //console.log('header ' + store.getState().Role)
        //setData(store.getState().Role)
      });
    }
    return () => {
      reduxsub()
      isSubscribed = false
    }

  }, []);

  return (
    <Router>
      <nav>
        <div className="clearfix" id="header">
          <div className="ant-row">
            <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4">
            </div>
            <Menu mode="horizontal">
              <Menu.Item key="mail" >
                <Link to="/">
                  <Icon type="home" />
                  Inicio
                </Link>
              </Menu.Item>
              {
                isAnyRole
                  ? <Menu.Item key="user" >
                    <Link to="/user">
                      <Icon type="gold" />
                      Panel Usuario
                    </Link>
                  </Menu.Item>
                  : ""

              }

              {
                isRoleAdmin
                  ? <Menu.Item key="admin" >
                    <Link to="/admin">
                      <Icon type="appstore" />
                      Panel Administrador
                    </Link>
                  </Menu.Item>
                  : ""
              }

            </Menu>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={App} />
        {
          isAnyRole
            ? <Route path="/user/" component={UserPanel} />
            : ""

        }
        {
          isRoleAdmin
            ? <Route path="/admin/" component={AdminPanel} />
            : ""

        }
        <Route path="/viewpersona/:dataIndex/" component={Viewpersona} />
        <Route path="/:dataIndex/editar" component={WrappedEditarPersonaForm} />
        <Route path="/:dataIndex/agregarlicencia" component={WrappedCrearlicenciaForm} />
        <Route path="/crearpersona" component={WrappedCrearpersonaForm} />
        <Route component={NoPageFound} />
      </Switch>
    </Router>
  )

}


export default Header