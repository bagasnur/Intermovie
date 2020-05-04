import React, { Component } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import UserComp from '../modules/User-Comp';

class User extends Component {
  state = {
    datas: [],
    films: [],
    datasId: '',
    remove: '',
    visible: false,
    dataFilm: [],
      id: 0,
      status: '',
      title: '',
      story: '',
      duration: 0,
      category: '',
      production: '',
      producer: '',
      banner: ''
  };

  componentDidMount() {
    axios.get(`https://apiflm.000webhostapp.com/film/list`)
      .then(res => {
        const films = res.data.result;
        this.setState({ films });
      })
  }

  onDelete(data) {
    axios.delete(`https://apiflm.000webhostapp.com/film/${data.id}`)
      .then(openNotif => {
        notification['info']({
          message: 'Data Deleted',
          description:
            'Data Film: "' + data.title + '" dihapus.',
          style: {
            border: '2px solid #df3939',
            color: 'white',
            background: '#df6565'
          },
        });
      })
  }

  showModal = (e) => {
    this.setState({
      datas: e,
      datasId: e.id,
      id: e.id,
      status: e.status,
      title: e.title,
      story: e.story,
      duration: e.duration,
      category: e.category,
      production: e.production,
      producer: e.producer,
      banner: e.banner,
      visible: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  
  handleChangeStatus = event => {
    this.setState({ 
      status: event.target.value
    });
  }
  handleChangeTitle = event => {
    this.setState({ 
      title: event.target.value
    });
  }
  handleChangeStory = event => {
    this.setState({ 
      story: event.target.value
    });
  }
  handleChangeDuration = event => {
    this.setState({ 
      duration: event.target.value
    });
  }
  handleChangeCategory = event => {
    this.setState({ 
      category: event.target.value
    });
  }
  handleChangeProduction = event => {
    this.setState({ 
      production: event.target.value
    });
  }
  handleChangeProducer = event => {
    this.setState({ 
      producer: event.target.value
    });
  }
  handleChangeBanner = event => {
    this.setState({ 
      banner: event.target.value
    });
  }


  handleSubmit = id => {
    this.setState({ 
      dataFilm: {
        status: this.state.status,
        title: this.state.title,
        story: this.state.story,
        duration: this.state.duration,
        category: this.state.category,
        production: this.state.production,
        producer: this.state.producer,
        banner: this.state.banner
      },
    });

    axios.put(`https://apiflm.000webhostapp.com/film/${id}`, this.state.dataFilm )
      .then(openNotif => {
        notification['success']({
          message: 'Updated',
          description:
            'Data Film: "' + this.state.title + '" telah terupdate.',
          style: {
            border: '2px solid #39df39',
            color: 'white',
            background: '#52e263'
          },
        });
      })
      this.setState({
        visible: false,
      });
  }

  render() {
    return (
      <UserComp
        initialData = {this.state}
        datas={this.state.datas}
        showModal={this.showModal}
        handleChangeStatus={this.handleChangeStatus}
        handleChangeTitle={this.handleChangeTitle}
        handleChangeStory={this.handleChangeStory}
        handleChangeDuration={this.handleChangeDuration}
        handleChangeCategory={this.handleChangeCategory}
        handleChangeProduction={this.handleChangeProduction}
        handleChangeProducer={this.handleChangeProducer}
        handleChangeBanner={this.handleChangeBanner}
        handleCancel={this.handleCancel}
        handleSubmit={this.handleSubmit}
        films={this.state.films}
        remove={this.onDelete}
      />
    )
  }
}

export default User;