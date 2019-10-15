import React, { Component, Fragment } from "react";
import {
    Row,
    Col,
    Form,
    Card,
    message,
    Button,
} from "antd";
import aliyunTheme from '@ant-design/aliyun-theme';
import darkTheme from '@ant-design/dark-theme';

import ColorPicker from "./index";

class Theme extends Component {
    constructor(props) {
        super(props);

        let initialValue = {
            /*'@layout-body-background': '#30303d',
             '@primary-color': '#1987a7',
             '@secondary-color': '#0000ff',
             '@text-color': '#fff',
             '@text-color-secondary': '#BFB5B5',
             '@heading-color': '#fa8c16',
             '@btn-primary-bg': '#397dcc' */
            /* '@layout-header-background': '#b36e94', */
        };
        let vars = {};
        try {
            vars = Object.assign({}, aliyunTheme, JSON.parse(localStorage.getItem('app-theme')));
        } finally {
            this.state = { vars, aliyunTheme };
            window.less
                //'@layout-body-background': "#3ff0303d", '@primary-color': "#177b9a", '@secondary-color': "#3a3acf", '@text-color': "#fff", '@text-color-secondary': "#BFB5B5"
                .modifyVars(vars)
                .then(() => { })
                .catch(error => {
                    message.error(`Failed to update theme`);
                });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };
    normFile = e => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    onChangeComplete = (varName, color) => {
        const { vars } = this.state;
        vars[varName] = color;
        this.setState({ vars });
    };
    handleColorChange = (varname, color) => {
        const { vars } = this.state;
        if (varname) vars[varname] = color;
        console.log(vars);
        window.less
            .modifyVars(vars)
            .then(() => {
                // message.success(`Theme updated successfully`);
                this.setState({ vars });
                localStorage.setItem("app-theme", JSON.stringify(vars));
            })
            .catch(error => {
                message.error(`Failed to update theme`);
            });
    };

    getColorPicker = (varName) => (
        <Fragment key={varName}>
            <Col xs={20}>{varName}</Col>
            <Col xs={4}>
                <ColorPicker
                    type="sketch"
                    small
                    color={this.state.vars[varName]}
                    position="bottom"
                    presetColors={[
                        '#F5222D',
                        '#FA541C',
                        '#FA8C16',
                        '#FAAD14',
                        '#FADB14',
                        '#A0D911',
                        '#52C41A',
                        '#13C2C2',
                        '#1890FF',
                        '#2F54EB',
                        '#722ED1',
                        '#EB2F96',
                    ]}
                    onChangeComplete={color => this.handleColorChange(varName, color)}
                />
            </Col>
        </Fragment>
    )
    resetTheme = () => {
        localStorage.setItem('app-theme', '{}');
        this.setState({ vars: this.state.initialValue });
        window.less
            .modifyVars(this.state.initialValue)
            .catch(error => {
                message.error(`Failed to reset theme`);
            });
    }
    temelight = () => {
        localStorage.setItem('app-theme', '{}');
        localStorage.setItem('app-theme', JSON.stringify(aliyunTheme));
        this.setState({ vars: aliyunTheme });
        window.less
            .modifyVars(aliyunTheme)
            .catch(error => {
                message.error(`Failed to reset theme`);
            });
    }
    temeDark = () => {
        localStorage.setItem('app-theme', '{}');
        const dar = darkTheme
        let sd = {
            '@text-color': '#fff',
        }
        localStorage.setItem("app-theme", JSON.stringify(darkTheme));
        this.setState({ vars: darkTheme });
        window.less
            .modifyVars(darkTheme)
            .catch(error => {
                message.error(`Failed to reset theme`);
            });
    }



    render() {
        //const colorPickers = Object.keys(this.state.vars).map(varName => this.getColorPicker(varName));
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 }
        };
        return (
            <Row>
                <Col xs={24} sm={6}>
                    <Card title="Tema" style={{ width: 300 }}>
                        <Row>
                            {/*       {colorPickers} */}
                            <Col xs={24} style={{ marginTop: '10px' }}>
                                <Button
                                    type="primary"
                                    onClick={this.resetTheme}>
                                    Reiniciar valores
                                </Button>
                                <br />
                                <br />
                                <Button
                                    type="primary"
                                    onClick={this.temelight}>
                                    Tema Claro
                                </Button>
                                <br />
                                <br />
                                <Button
                                    type="primary"
                                    onClick={this.temeDark}>
                                    Tema Oscuro
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>

            </Row>

        );
    }
}

Theme = Form.create()(Theme);
export default Theme;