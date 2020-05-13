import React, { Component } from 'react'
import { Form, Input, Button, Row, Layout } from 'antd';
import '../assets/css/Login.css';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;

class Login extends Component {

   checkUsername = (rule, value, callback) => {
      const form = this.props.form;
      form.setFields({
         username: {
            value: 'asdas'
         }
      });
      // form.setFieldsValue ('pedro, manada');
   }

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            console.log('Received values of form: ', values);
         }
      });
   }

   render() {
      return (
         <div>
            <Layout className="layout">
               <div className="lp">
                  <Content>
                     <Row className="item">
                        <Form onSubmit={this.handleSubmit} className="login-form">

                           <Form.Item
                              name="username"
                              rules={[{ required: true, message: 'Silahkan masukkan Username!' }]}>
                              <Input placeholder=" Username" onChange={this.handleChangeProduction} />
                           </Form.Item>
                           <Form.Item
                              name="pwd"
                              rules={[{ required: true, message: 'Silahkan masukkan Password!' }]}>
                              <Input placeholder=" Password" type="password" onChange={this.handleChangeStatus} />
                           </Form.Item >

                           <Form.Item>
                              <Button type="primary" htmlType="submit" className="btn login">
                                 Log in
</Button>
                           </Form.Item>
                        </Form>
                     </Row>
                  </Content>
               </div>
            </Layout>
         </div>

      );
   }
}

export default Login;