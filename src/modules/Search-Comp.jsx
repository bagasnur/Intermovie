import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import '../assets/css/Search.css';
import { Col, Row } from 'antd';
import { StarFilled } from '@ant-design/icons';

class SearchComp extends Component {
    showHandleFilm = data => {
        let filmId = data.data.id;
        console.log(data.data.category)
        this.props.history.push(`/film/${filmId}`)
      };

    render() {
        const { films } = this.props;

        return (
            <Row className="item">
                {films.map(data =>
                    <Col xs={21} sm={10} md={9} lg={6} xl={6} className="con" key={data.id}>
                        <div style={{ background: "url(" + data.banner + ")" }} className="banner"></div>
                        <Col>
                        <h3><b><Link onClick={()=>this.showHandleFilm({data})}>{data.title}</Link></b></h3>
                            <p>Production: {data.production} </p>
                            <p>Producer: {data.producer} </p>
                            <p><StarFilled style={{ color: '#ebb92f' }} twoToneColor="#ebb92f" /> {data.rating} / 10 </p>
                        </Col>
                    </Col>
                )}
            </Row>
        );
    }
}

export default withRouter(SearchComp);