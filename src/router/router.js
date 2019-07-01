
/*
   Root, Router 配置
*/
// import React from 'react';
// import {Route, Switch, Redirect } from 'react-router-dom';
 
// import App from './../App';
 
import login from './../pages/login';
import {goods} from './../pages/goods';
import AuthExample from './../pages/home';
import my from './../pages/my';
import userList from '../pages/userList';
import user from '../pages/user';
// import forgetPass from './../pages/forgetPass'
// import { resolve } from 'q';

const Routes = [
    {
        path:'/',
        exact:true,
        redirect:'/login',
        component:login
    },
    {
        path:'/login',
        name:'登录',
        component:login
    },
    {
        path:'/user',
        name:'用户',
        component:user
    },
    {
        path:'/userList',
        name:'用户列表',
        component:userList
    },
    {
        path:'/home',
        name:'首页',
        // exact:true,
        component:AuthExample
    },
    {
        path:'/goods',
        name:'商品',
        // exact:true,
        component:goods
    },
    {
        path:'/my',
        name:'我的',
        // exact:true,
        component:my
    }
]
export default Routes
// class RouteMap extends React.Component {
//     render(){
//         return(
//             <Switch>
//                 <Route
//                 path="/"
//                 render={props => (
//                     <App>
//                         <Switch>
//                             <Route path="/" exact component={login} />
//                             <Route path="/login" component={login} />
//                             <Route path="/home" component={home} />
//                             <Route path="/goods" component={goods} />
//                             <Route path="/forgetPass" component={forgetPass} />
//                             <Route path="/my/:id" component={my} />
//                             {/*路由不正确时，默认跳回home页面*/}
//                             <Route render={() => <Redirect to="/" />} />
//                         </Switch>
//                     </App>
//                 )}
//                 />
//             </Switch>
//         )
//     } 
// }

 
// export default RouteMap