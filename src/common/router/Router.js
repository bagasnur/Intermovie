import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from '../../app/Search';
import Home from '../../app/Home';
import Category from '../../app/Category';
import User from '../../app/User';
import AddPostComp from '../../modules/AddPost-Comp';
// import Login from '../../app/Login';
import Film from '../../app/Film';
import FilmDetail from '../../app/FilmDetail';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/film/:filmId" component={FilmDetail}/>
                <Route path="/category/:categoryFilm" component={Film}/>
                <Route path="/search" component={Search}/>
                <Route path="/category" component={Category}/>
                {/* <Route path="/login" component={Login}/> */}
                <Route path="/user" component={User}/>
                <Route path="/create" component={AddPostComp}/>
            </Switch>
        );
    }
}

export default Router;