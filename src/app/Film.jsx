import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { Row, Layout, BackTop } from 'antd';
import FilmComp from '../modules/Film-Comp';
const { Content } = Layout;

class Film extends Component {
  state = {
    films: [],
    category:''
  }

componentWillMount(){
  const { categoryFilm } = this.props.match.params
  axios.get(`https://intermovieapi.herokuapp.com/category?category=${categoryFilm}`)
    .then((response) => {
      this.setState({
        category: categoryFilm,
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
            <p className="titlee" ><b>{this.state.category}</b></p>
                <FilmComp films={this.state.films} />
          </Content>
        </div>
      </Layout>
      <BackTop />
    </div>
  )
}
}

export default withRouter(Film);