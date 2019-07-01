
/*
   App 应用总容器  
   //运行 db.json json-server db.json -w -p 3000
*/
import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch, Redirect,Link,withRouter} from 'react-router-dom';
import Routes from './router/router'
import './iconfont/iconfont.css';
import './css/puplic.css';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...withRouter(props)} />
      //<route.component {...props} routes={route.Routes}/>
  )}/>
)

class App extends Component {
    render() {
      console.log(this.props)
      return (
        <Router>
            <Switch>
              {Routes.map((route, i) => (
                      <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
            
              {/* <Route render={props => { return  Routes.map((item,index) => <Route key={index} exact={item.exact} path={item.path} component={item.component} />)}}></Route> */}
        </Router>
      );
    }
  }
export default App;
