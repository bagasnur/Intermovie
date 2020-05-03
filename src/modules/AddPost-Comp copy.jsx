import React, { Component, Fragment } from 'react';
import '../assets/css/AddPost.css';
import { Select, Input, Form, Card, Col, Row, Layout, BackTop, Button, Modal } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

class AddPostComp2 extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    const { TextArea } = Input;
    const { Option } = Select;

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    // const children = [];
    // for (let i = 10; i < 36; i++) {
    //   children.push(<Option value={(i.toString(36) + i)}>{i.toString(36) + i}</Option>);
    // }

    return (
      <div>
        <Layout className="layout">
          <div className="lp">
            <Content className="content2">
              <Card title="Add Data Film/Movie">
                <Col span={16} className="inputan">
                <Form className="inputForm"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="judul"
                    rules={[{ required: true, message: 'Silahkan masukkan Judul Film!' }]}
                  ><Input placeholder="Judul Film" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="sinopsis"
                  ><TextArea rows={4} placeholder="Sinopsis" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="url"
                    rules={[{ required: true, message: 'Silahkan masukkan Cover Film!' }]}
                  ><Input placeholder="URL Cover Banner [Ex. www.domain.com/image.png/.jpg]" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="durasi"
                  ><Input placeholder="Durasi (menit)" type='number' onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="category"
                    rules={[{ required: true, message: 'Silahkan masukkan Kategori Film! (min. 1)' }]}>
                 {/* <Select mode="tags" placeholder="Kategori (Required)" onChange={handleChange}>
                 {children}
                </Select> */} <Input placeholder="Kategori [Pisahkan dengan , (koma)]" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="producer"
                    rules={[{ required: true, message: 'Silahkan masukkan Produser Film!' }]}
                  ><Input placeholder="Produser " onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="studio"
                    rules={[{ required: true, message: 'Silahkan masukkan Studio Produksi Film!' }]}>
                  {/* <Select mode="tags" placeholder="Studio Produksi (Required)" onChange={handleChange}>
                  {children}
                </Select> */} <Input placeholder="Studio Produksi [Pisahkan dengan , (koma)]" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="status"
                    rules={[{ required: true, message: 'Silahkan masukkan Status Film!' }]}>
                   {/* <Select placeholder="Status Rilis (Required)" onChange={handleChange}>
                   <Option value="Coming Soon">Coming Soon</Option>
                  <Option value="Released">Released</Option>
                 </Select> */} <Input placeholder="Status [Coming Soon/Released]" onChange={handleChange}/>
                  </Form.Item>
                    <Button type="primary" htmlType="submit" className="btn" onClick={() => handleSubmit}>
                      Simpan Data
                      </Button>
                </Form>
                </Col>
              </Card>
            </Content>
          </div>
        </Layout>
        <BackTop />
      </div>

    );
  }
}

export default AddPostComp2;
