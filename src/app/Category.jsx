import React, { Component } from 'react';
import CategoryComp from '../modules/Category-Comp';
import axios from 'axios';

class Category extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`https://intermovieapi.herokuapp.com/category/top`)
    .then(res => {
      const categories = res.data.result;
      this.setState({ categories });
    })
  }

  render() {
    return (
      <CategoryComp
        categories={this.state.categories}
      />
    )
  }
}

export default Category;