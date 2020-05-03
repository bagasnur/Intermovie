import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/AddPost.css';
import { Input, Form, Card, Col, Row, Layout, BackTop, Button, notification } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';
const { Content } = Layout;

class AddPostComp extends Component {
  state = {
    status: '',
    title: '',
    story: '',
    duration: 0,
    category: '',
    production: '',
    producer: '',
    banner: ''
  }

  handleChangeStatus = event => {
    this.setState({ 
      status: event.target.value
    });
  }
  handleChangeTitle = event => {
    this.setState({ 
      title: event.target.value
    });
  }
  handleChangeStory = event => {
    this.setState({ 
      story: event.target.value
    });
  }
  handleChangeDuration = event => {
    this.setState({ 
      duration: event.target.value
    });
  }
  handleChangeCategory = event => {
    this.setState({ 
      category: event.target.value
    });
  }
  handleChangeProduction = event => {
    this.setState({ 
      production: event.target.value
    });
  }
  handleChangeProducer = event => {
    this.setState({ 
      producer: event.target.value
    });
  }
  handleChangeBanner = event => {
    this.setState({ 
      banner: event.target.value
    });
  }


  handleSubmit = (e) => {
    console.log(this.state);

    const film = this.state

    axios.post(`http://localhost:8000/film`, film )
      .then(openNotif => {
        notification['success']({
          message: 'Success',
          description:
            'Data Film: "' + film.title + '" telah disimpan.',
          style: {
            width: 300,
            border: '2px solid #39df39',
            color: 'white',
            background: '#52e263',
            marginLeft: 250 - 175
          },
        });
      })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { TextArea } = Input;
    return (
      <div>
        <Layout className="layout">
          <div className="lp">
          <Link to="/user">
          <Button className="btnMod" >
              Kembali ke User
          </Button></Link>
            <Content className="content2">
              <Card title="Add Data Film/Movie">
                <Col span={16} className="inputan">
                <Form className="inputForm"
                  initialValues={{ remember: true }}
                  onFinish={this.handleSubmit}
                  onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item
                    name="title" 
                    rules={[{ required: true, message: 'Silahkan masukkan Judul Film!' }]}
                  ><Input placeholder="Judul Film" onChange={this.handleChangeTitle}/>
                  </Form.Item>
                  <Form.Item
                    name="story"
                  ><TextArea rows={4} placeholder="Sinopsis" onChange={this.handleChangeStory}/>
                  </Form.Item>
                  <Form.Item
                    name="banner"
                    rules={[{ required: true, message: 'Silahkan masukkan Cover Film!' }]}
                  ><Input placeholder="URL Cover Banner [Ex. www.domain.com/image.png/.jpg]" onChange={this.handleChangeBanner}/>
                  </Form.Item>
                  <Form.Item
                    name="duration"
                  ><Input placeholder="Durasi (menit)" type='number' onChange={this.handleChangeDuration}/>
                  </Form.Item>
                  <Form.Item
                    name="category"
                    rules={[{ required: true, message: 'Silahkan masukkan Kategori Film! (min. 1)' }]}>
                <Input placeholder="Kategori [Pisahkan dengan , (koma)]" onChange={this.handleChangeCategory}/>
                  </Form.Item>
                  <Form.Item
                    name="producer"
                    rules={[{ required: true, message: 'Silahkan masukkan Produser Film!' }]}
                  ><Input placeholder="Produser " onChange={this.handleChangeProducer}/>
                  </Form.Item>
                  <Form.Item
                    name="production"
                    rules={[{ required: true, message: 'Silahkan masukkan Studio Produksi Film!' }]}>
                  <Input placeholder="Studio Produksi [Pisahkan dengan , (koma)]" onChange={this.handleChangeProduction}/>
                  </Form.Item>
                  <Form.Item
                    name="status"
                    rules={[{ required: true, message: 'Silahkan masukkan Status Film!' }]}>
                   <Input placeholder="Status [Coming Soon/Released]" onChange={this.handleChangeStatus}/>
                  </Form.Item >
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn" >
                      Simpan Data
                      </Button>
                  </Form.Item>
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

export default AddPostComp;
