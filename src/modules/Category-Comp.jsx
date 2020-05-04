import React, { Component } from 'react';
import '../assets/css/Home.css';
import { Col, Row, Layout, Button } from 'antd';
const { Content, Footer } = Layout;

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
                  <Col xs={21} sm={10} md={9} lg={5} xl={3} key={data.id} className="btnMod">
                    <Button>
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
