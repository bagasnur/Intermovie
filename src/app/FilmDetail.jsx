import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { Row, Layout, BackTop } from 'antd';
import FilmDetailComp from '../modules/FilmDetail-Comp';
const { Content } = Layout;

class FilmDetail extends Component {
  state = {
    films: []
  }

componentWillMount(){
  const { filmId } = this.props.match.params
  axios.get(`https://intermovieapi.herokuapp.com/film/${filmId}`)
    .then((response) => {
      this.setState({
        films: response.data.result
      })
      console.log(response.data);
    })
}

render() {
  return (
    <div>
      <Layout className="layout">
        <div className="lp">
          <Content className="content2">
            <Row>
                <FilmDetailComp films={this.state.films} />
            </Row>
          </Content>
        </div>
      </Layout>
      <BackTop />
    </div>
  )
}
}

export default withRouter(FilmDetail);