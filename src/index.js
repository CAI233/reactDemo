import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter}from 'react-router-dom';
import './index.css';
import App from './App';
//https://blog.csdn.net/awaw00/article/category/6642917 react学习 博客学习
// import RouteMap from './router/router';
import * as serviceWorker from './serviceWorker';

// import login from './pages/login';  
// import home from './pages/home'; 
// import my from './pages/my'; 

// export default class Hello extends Component{
//     render(){
//         return (
//             <Router>
//                 <div>
//                     <ul className="nav">
//                         <li><Link to="/">App</Link></li>
//                         <li><Link to="/login">login</Link></li>
//                         <li><Link to="/home">home</Link></li>
//                         <li><Link to="/my">my</Link></li>
//         　　 　　　　</ul>
//                     <hr />
//                     <Route exact path="/" component={App} />
//                     <Route path="/login" component={login} />
//                     <Route path="/home" component={home} />
//                     <Route path="/my" component={my} />
//                 </div>
//             </Router>
//         )
//     }
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<BrowserRouter>
// <RouteMap />
// </BrowserRouter>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
