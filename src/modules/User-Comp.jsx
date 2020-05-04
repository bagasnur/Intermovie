import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/User.css';
import { Input, Form, Card, Col, Row, Layout, BackTop, Button, Modal } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Content, Footer } = Layout;

class UserComp extends Component {
  render() {
    const { films, remove, showModal, handleCancel, handleSubmit, initialData, datas,
      handleChangeStatus, handleChangeTitle, handleChangeStory, handleChangeDuration, handleChangeCategory, handleChangeProduction, handleChangeProducer, handleChangeBanner,id, status, title, story, duration, category, production, producer, banner} = this.props;
    const { TextArea } = Input;

    return (
      <div>
        <Layout className="layout">
          <div className="lp">
              <Content className="content2">
                <Card title="Edit Data Film/Movie">
                  <Link to="/create"> <Button type="primary" className="btn">Tambah Data</Button> </Link>
                  {films.map(data =>
                  <Card key={data.id} type="inner" style={{ margin: "16px 0" }} title={data.title} extra={
                    <Col>
                      <Button type="primary" style={{ marginRight: 16 }} className="btn" onClick={() => showModal(data)}>Edit Data</Button>
                      <Button type="primary" danger className="btn" onClick={() => remove(data)}>Delete</Button>
                    </Col>}>
                    <Row>
                      <Col xs={23} sm={23} md={8} lg={8} xl={8} style={{ background: "url(" + data.banner + ")" }} className="banner" >
                      </Col>
                      <Col xs={23} sm={23} md={15} lg={15} xl={15}>
                        <b>Sinopsis</b>
                        <p> {data.story} </p>
                        <b>Studio Produksi</b>
                        <p> {data.production} </p>
                        <b>Produser</b>
                        <p> {data.producer} </p>
                        <b>Kategori:</b>
                        <p> {data.category} </p>
                        <b>Rating:</b> <h2><StarFilled style={{ color: '#ebb92f' }} /> {data.rating}/10</h2>
                      </Col>
                    </Row>
                  </Card>
                  )}
                </Card>
                <Modal
                  title={"Edit Data Film/Movie: " + datas.title}
                  visible={initialData.visible}
                  onCancel={handleCancel}
                  footer={[]}
                >
                  <Form className="inputForm"
                    initialValues={{ remember: true }}
                    onFinish={() => handleSubmit(datas.id)}
                  >
                    <Form.Item name="title" 
                    ><Input placeholder={datas.title} onChange={handleChangeTitle} />
                    </Form.Item>
                    <Form.Item name="story"
                    ><TextArea rows={4} placeholder={story} onChange={handleChangeStory} />
                    </Form.Item>
                    <Form.Item name="banner"
                    ><Input placeholder={banner} onChange={handleChangeBanner} />
                    </Form.Item>
                    <Form.Item name="duration"
                    ><Input placeholder={duration} type='number' onChange={handleChangeDuration} />
                    </Form.Item>
                    <Form.Item name="category">
                      <Input placeholder={category} onChange={handleChangeCategory} />
                    </Form.Item>
                    <Form.Item name="producer"
                    ><Input placeholder={producer} onChange={handleChangeProducer} />
                    </Form.Item>
                    <Form.Item name="production">
                      <Input placeholder={production} onChange={handleChangeProduction} />
                    </Form.Item>
                    <Form.Item name="status">
                      <Input placeholder={status} onChange={handleChangeStatus} />
                    </Form.Item >
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="btn" >
                        Update Data
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
              </Content>
          </div>
        </Layout>
        <BackTop />
      </div>

    );
  }
}

export default UserComp;
