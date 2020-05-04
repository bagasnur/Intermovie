import React, { Component } from 'react';
import '../assets/css/Home.css';
import { Carousel, Col, Row, Layout, BackTop, Button } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Content, Footer } = Layout;
const catData = [
  {
    id: "6",
    category: "Action"
  },
  {
    id: "7",
    category: "Adventure"
  },
  {
    id: "10",
    category: "Comedy"
  },
  {
    id: "1",
    category: "Drama"
  },
  {
    id: "12",
    category: "Horror"
  },
  {
    id: "8",
    category: "Romance"
  }
]

class HomeComp extends Component {
  render() {
    const { films } = this.props;

    return (
      <div>
        <Layout className="layout">
          <Carousel autoplay>
            <div>
              <div style={{ background: "url(https://see.news/wp-content/uploads/2020/03/blackwidow_lob_mas_mob_06.jpg)" }} />
            </div>
            <div>
              <div style={{ background: "url(https://www.blackxperience.com/assets/content/blackattitude/blackstyle/rs-1920x1423-190305214222-1920-captain-marvel-mcu-cast-mh-030519.jpg)" }} />
            </div>
            <div>
              <div style={{ background: "url(https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/04/avengers-endgame-disney-1068x601.jpg)" }} />
            </div>
          </Carousel>

          <div className="lp">
            <Content className="content2">
              <p className="titlee" ><b>Top Rated Movies</b></p>
              <Row className="item">
                {films.map(data =>
                  <Col xs={21} sm={10} md={9} lg={6} xl={6} className="con" key={data.id}>
                    <div style={{ background: "url("+data.banner+")" }} className="banner"></div>
                    <Col>
                      <h3><b>{data.title}</b></h3>
                      <p><StarFilled style={{ color: '#ebb92f' }} /> {data.rating} / 10 </p>
                    </Col>
                  </Col>
                )}

              </Row>
            </Content>

            <Content className="content2">
              <p className="titlee" ><b>Top Category</b></p>
              <Row className="item">
                {catData.map(cat =>
                <Col xs={21} sm={10} md={9} lg={5} xl={3} className="btnMod" key={cat.id}>
                  <Button>
                    {cat.category}
                  </Button>
                </Col>
                )}

              </Row>
            </Content>
          </div>
        </Layout>
        <BackTop />
      </div>

    );
  }
}

export default HomeComp;
