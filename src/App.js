import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/home/Home.js'
import List from './containers/list/List.js'
import Mine from './containers/mine/Mine.js'
import TestRedux from './containers/test/TestRedux';

// import logo from './logo.svg';
import './App.css';

// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';


import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Switch> */}
          <AnimatedRouter>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/mine" component={Mine} />
            <Route path="/test" component={TestRedux} />
          </AnimatedRouter>

          {/* </Switch> */}
        </Router>

      </div >
    );
  }
}

export default App;
