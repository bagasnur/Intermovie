import React, { Component } from 'react'
import axios from 'axios'
import SearchComp from '../modules/Search-Comp';
import { Row, Layout, BackTop } from 'antd';
const { Content } = Layout;

class Search extends Component {
  state = {
    query: '',
    films: [],
    data: '0'
  }

  getInfo = () => {
    axios.get(`https://intermovieapi.herokuapp.com/film?search=${this.state.query}`)
      .then(res => {
        const films = res.data.result;
        const data = res.data.data_found;
        this.setState({ films, data });
      })
  }

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query) {
        this.getInfo()
      } else { }
    })
  }

  render() {
    return (
      <div>
        <Layout className="layout">
          <div className="lp">
            <Content className="content2">
              <p className="titlee" ><b>Search Movies</b></p>
              <Row>
                <form>
                  <input placeholder="Search Movie: Title, Producer, or Studios here..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    onKeyPress={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                  <p>Showing {this.state.data} Movies</p>
                  <SearchComp films={this.state.films} />
                </form>
              </Row>
            </Content>
          </div>
        </Layout>
        <BackTop />
      </div>
    )
  }
}

export default Search