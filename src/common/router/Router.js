import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from '../../app/Search';
import Home from '../../app/Home';
import Category from '../../app/Category';
import User from '../../app/User';
import AddPostComp from '../../modules/AddPost-Comp';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/category" component={Category}/>
                <Route path="/user" component={User}/>
                <Route path="/create" component={AddPostComp}/>
            </Switch>
        );
    }
}

export default Router;