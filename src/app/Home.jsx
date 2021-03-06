import React, { Component } from 'react';
import HomeComp from '../modules/Home-Comp';
import axios from 'axios';

class Home extends Component {
  state = {
    films: [],
    jumlah: "2"
  }

  componentDidMount() {
    axios.get(`https://intermovieapi.herokuapp.com/film/top/6`)
    .then(res => {
      const films = res.data.result;
      this.setState({ films });
    })
  }

  render() {
    return (
      <HomeComp
        initialData={this.state}
        films={this.state.films}
        jumlah={this.state.jumlah}
      />
    )
  }
}

export default Home;