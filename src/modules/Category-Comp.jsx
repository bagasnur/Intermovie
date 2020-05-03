import React, { Component, Fragment } from 'react';
import '../assets/css/Home.css';
import { Carousel, Typography, Card, Col, Row, Layout, Button } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

class CategoryComp extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <Layout className="layout">
          <div className="lp">
            <Content className="content2">
              <p className="titlee" ><b>Category</b></p>
              <Row className="item">
                {categories.map(data =>
                  <Col xs={21} sm={10} md={9} lg={5} xl={3} className="btnMod">
                    <Button key={data.id}>
                      {data.name}
                    </Button>
                  </Col>
                )}

              </Row>
            </Content>
          </div>
        </Layout>
      </div>

    );
  }
}

export default CategoryComp;
