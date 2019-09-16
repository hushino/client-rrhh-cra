import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Checkbox, Form, Icon, Input, Button, Row, Menu, PageHeader } from 'antd';


function Login() {
    const [state, setState] = useState([]);
    useEffect(() => {
       
     
        }, []);
        function handleSubmit(e) {
            e.preventDefault();
             /* this.props.form.validateFields((err, values) => {
              if (!err) {
                console.log('Received values of form: ', values);
              }
            });   */
        };
      //const { getFieldDecorator } = state;
      return (
        <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {setState('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {setState('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {setState('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
    
}

export default Login