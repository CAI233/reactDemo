import React from 'react';
import HomeLayout from './layouts/HomeLayout';
class userList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          userList: []
        };
      }
    
    componentWillMount () {
        fetch('http://localhost:3000/user').then(res => res.json()).then(res => {
            this.setState({
                userList: res
            });
        });
    }

    handleDel (user) {
        // const confirmed = confirm(`确定要删除用户 ${user.name} 吗？`);
    
        if (user) {
          fetch('http://localhost:3000/user/' + user.id, {
            method: 'delete'
          })
            .then(res => res.json())
            .then(res => {
              this.setState({
                userList: this.state.userList.filter(item => item.id !== user.id)
              });
              alert('删除用户成功');
            })
            .catch(err => {
              console.error(err);
              alert('删除用户失败');
            });
        }
    }
    handleEdit(user){
        if(!user['isRev']){
            user['isRev'] = false;
        }
        user['isRev'] = !user['isRev']
    }


  render () {
    const {userList} = this.state;
    return (
        <HomeLayout title="用户列表">
            <table>
                <thead>
                <tr>
                    <th>用户ID</th>
                    <th>用户名</th>
                    <th>用户密码</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    userList.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            {/* <td><span>{user.name}</span><input onChange={(e) => handleChange('name', e)}/></td>
                            <td><span>{user.password}</span><input onChange={(e) => handleChange('password', e)}/></td> */}
                            <td>
                                <a href="javascript:void(0)" onClick={() => this.handleEdit(user)}>编辑</a>
                                &nbsp;
                                <a href="javascript:void(0)" onClick={() => this.handleDel(user)}>删除</a>
                            </td>
                        </tr>
                    );
                    })
                }
                </tbody>
            </table>
        </HomeLayout>
    )
  }
}

export default userList;
