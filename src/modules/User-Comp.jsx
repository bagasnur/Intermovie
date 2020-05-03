import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/User.css';
import { Select, Input, Form, Card, Col, Row, Layout, BackTop, Button, Modal } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

class UserComp extends Component {
  render() {
    const { films, remove, edit, showModal, handleCancel, handleSubmit, initialData, datas,
      handleChangeStatus, handleChangeTitle, handleChangeStory, handleChangeDuration, handleChangeCategory, handleChangeProduction, handleChangeProducer, handleChangeBanner } = this.props;
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
                    <Form.Item
                      name="title"
                      rules={[{ required: true, message: 'Silahkan masukkan Judul Film!' }]}
                    ><Input placeholder="Judul Film" defaultValue={datas.title} values={"'"+datas.title+"'"} onChange={handleChangeTitle} />
                    </Form.Item>
                    <Form.Item
                      name="story"
                    ><TextArea rows={4} placeholder="Sinopsis" defaultValue={datas.story} onChange={handleChangeStory} />
                    </Form.Item>
                    <Form.Item
                      name="banner"
                      rules={[{ required: true, message: 'Silahkan masukkan Cover Film!' }]}
                    ><Input placeholder="URL Cover Banner [Ex. www.domain.com/image.png/.jpg]" defaultValue={datas.banner} value={datas.banner} onChange={handleChangeBanner} />
                    </Form.Item>
                    <Form.Item
                      name="duration"
                    ><Input placeholder="Durasi (menit)" type='number' defaultValue={datas.duration} value={datas.duration} onChange={handleChangeDuration} />
                    </Form.Item>
                    <Form.Item
                      name="category"
                      rules={[{ required: true, message: 'Silahkan masukkan Kategori Film! (min. 1)' }]}>
                      <Input placeholder="Kategori [Pisahkan dengan , (koma)]" defaultValue={datas.category} value={datas.category} onChange={handleChangeCategory} />
                    </Form.Item>
                    <Form.Item
                      name="producer"
                      rules={[{ required: true, message: 'Silahkan masukkan Produser Film!' }]}
                    ><Input placeholder="Produser " defaultValue={datas.producer} value={datas.producer} onChange={handleChangeProducer} />
                    </Form.Item>
                    <Form.Item
                      name="production"
                      rules={[{ required: true, message: 'Silahkan masukkan Studio Produksi Film!' }]}>
                      <Input placeholder="Studio Produksi [Pisahkan dengan , (koma)]" defaultValue={datas.production} value={datas.production} onChange={handleChangeProduction} />
                    </Form.Item>
                    <Form.Item
                      name="status"
                      rules={[{ required: true, message: 'Silahkan masukkan Status Film!' }]}>
                      <Input placeholder="Status [Coming Soon/Released]" defaultValue={datas.status} value={datas.status} onChange={handleChangeStatus} />
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
