import React, { Component } from 'react';
import '../assets/css/AddPost.css';
import { Input, Form, Card, Col, Layout, BackTop, Button } from 'antd';
const { Content, Footer } = Layout;

class AddPostComp2 extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    const { TextArea } = Input;

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

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
                    rules={[{ required: true, message: 'Silahkan masukkan Kategori Film! (min. 1)' }]}><Input placeholder="Kategori [Pisahkan dengan , (koma)]" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="producer"
                    rules={[{ required: true, message: 'Silahkan masukkan Produser Film!' }]}
                  ><Input placeholder="Produser " onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="studio"
                    rules={[{ required: true, message: 'Silahkan masukkan Studio Produksi Film!' }]}><Input placeholder="Studio Produksi [Pisahkan dengan , (koma)]" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="status"
                    rules={[{ required: true, message: 'Silahkan masukkan Status Film!' }]}><Input placeholder="Status [Coming Soon/Released]" onChange={handleChange}/>
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
