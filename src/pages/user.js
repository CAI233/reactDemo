import React from 'react';
import {Link} from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
class user extends React.Component {
    render () {
      return (
        <HomeLayout title="Welcome">
            <Link to="/userList">用户列表</Link>
            <br/>
            <Link to="/userAdd">添加用户</Link>
        </HomeLayout>
      );
    }
}
export default user;
