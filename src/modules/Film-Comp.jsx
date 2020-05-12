import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import '../assets/css/Home.css';
import { Col, Row, BackTop } from 'antd';
import { StarFilled } from '@ant-design/icons';

class FilmComp extends Component {
  showHandle = data => {
    let filmId = data.data.id;
    console.log(data.data.category)
    this.props.history.push(`/film/${filmId}`)
  };

  render() {
    const { films } = this.props;

    return (
      <div>
        <Row className="item">
          {films.map(data =>
            <Col xs={21} sm={10} md={9} lg={6} xl={6} className="con" key={data.id}>
              <div style={{ background: "url(" + data.banner + ")" }} className="banner"></div>
              <Col>
                <h3><b><Link onClick={()=>this.showHandle({data})}>{data.title}</Link></b></h3>
                <p><StarFilled style={{ color: '#ebb92f' }} /> {data.rating} / 10 </p>
              </Col>
            </Col>
          )}

        </Row>
        <BackTop />
      </div>

    );
  }
}

export default withRouter(FilmComp);
