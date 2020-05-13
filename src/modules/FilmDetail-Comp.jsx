import React, { Component } from 'react';
import '../assets/css/User.css';
import { Col, Row, BackTop } from 'antd';
import { StarFilled } from '@ant-design/icons';

class FilmDetailComp extends Component {
  render() {
    const { films } = this.props;

    return (
      <div>
          <Row>
            <Col span={24} style={{ background: "url(" + films.banner + ")" }} className="banner banner-detail" >
            </Col>
            <Col span={20} className="detail">
              <h1> {films.title} ({films.status})</h1>
              <b>Sinopsis</b>
              <p> {films.story} </p>
              <b>Durasi</b>
              <p> {films.duration} menit</p>
              <b>Studio Produksi</b>
              <p> {films.production} </p>
              <b>Produser</b>
              <p> {films.producer} </p>
              <b>Kategori:</b>
              <p> {films.category} </p>
              <b>Rating:</b> <h2><StarFilled style={{ color: '#ebb92f' }} /> {films.rating}/10</h2>
            </Col>
          </Row>
        <BackTop />
      </div>

    );
  }
}

export default FilmDetailComp;
