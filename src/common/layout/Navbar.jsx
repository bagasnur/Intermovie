import React, { Component } from 'react';
import { Menu, Affix } from 'antd';
import '../layout/css/navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    current: '',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Affix offsetTop={0}>
        <nav className="menuBar">
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="search">
              <Link to="/search">Search Movie</Link>
            </Menu.Item>
            <Menu.Item key="category">
              <Link to="/category">Category</Link>
            </Menu.Item>
          </Menu>
        </nav>
      </Affix>
    );
  }
}

export default Navbar;
