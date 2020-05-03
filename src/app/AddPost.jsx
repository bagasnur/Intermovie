import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  state = {
    films: [],
    forms: {
      judul: 'Null',
      sinopsis: 'Null',
      studio: 'Null',
      producer: 'Null',
      category: 'Null',
      status: 'Null',
      durasi: 'Null',
      url: '',
    }
  };

  componentDidMount() {
    axios.get(`https://apiflm.000webhostapp.com/film/`)
      .then(res => {
        const films = res.data.result;
        this.setState({ films });
      })
  }

  handleChange() {
    console.log();
  }

  handleSubmit(e) {
    console.log(e);
  }

  render() {
    return (
      <AddPost
      handleSubmit={this.handleSubmit}
        films={this.state.films}
        forms={this.state.forms}
      />
    )
  }
}


export default AddPost;