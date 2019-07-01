
/*
   Test 主页
*/
import React, { Component } from 'react';
import { List, InputItem, WhiteSpace ,Button,WingBlank,Toast} from 'antd-mobile';
import { createForm } from 'rc-form';//金额键盘 受控组件建议使用rc-form
import FormItem from './comments/FormItem';
import formProvider from './../utils/formProvider';
// import { Link } from 'react-router-dom';
import logo from './../logo.svg';
import './login.css';


 
class login extends Component {
    constructor (props) {
        super(props)
    }
    state ={
        form: {
            name: {
              valid: false,
              value: '',
              error: ''
            },
            password: {
              valid: false,
              value: '',
              error: ''
            }
        }
    }
    componentDidMount() {
        
    }
    login = (e) =>{
        // this.props.history.push('/home')
        e.preventDefault();
        const {form: {name, password}, formValid} = this.props;
        this.props.history.push('/user')
        // if (!formValid) {
        //     alert('请填写正确的信息后重试');
        //     return;
        // }
        // fetch('http://localhost:3000/user', {
        //     method: 'post',
        //     body: JSON.stringify({
        //         name: name.value,
        //         password: password.value,
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then((res) => {
        //     return res.json()
        // })
        // .then((res) => {
        //     console.log(res);
        //     if (res.id) {
        //     alert('添加用户成功');
        //     this.delete(res.id)
        //     } else {
        //     alert('添加失败');
        //     // this.delete()
        //     }
        // })
        // .catch((err) => console.error(err));
    }
     
   render() {
        // const { getFieldProps } = this.props.form;
        const {form: {name, password}, handleChange} = this.props;
        let container = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#282c34'
        }
        return (
            <div id="container" style={container}>
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="cont">
                    <List>
                        {/* {name.valid && <span className="error-span">{name.error}</span>}
                        {password.valid && <span className="error-span">{password.error}</span>} */}
                        <InputItem
                            clear 
                            // {...getFieldProps('autofocus')}
                            placeholder="手机号/微信号" onChange={(e) => handleChange('name', e)}
                            value={name.value} 
                        >账号</InputItem>
                        
                        <InputItem
                            // error={!password.valid}
                            type="password"
                            placeholder="输入密码" onChange={(e) => handleChange('password', e)}
                            value={password.value} 
                            // ref={el => this.autoFocusInst = el}
                        >密码</InputItem>
                    </List>
                    <WingBlank>
                        <Button onClick={(e) => this.login(e)}>登录</Button><WhiteSpace />
                    </WingBlank>
                    <div className="cont-foot">
                        <p onClick={() => this.props.history.push('/forgetPass')}>忘记密码？</p>
                    </div>
                </div>
           </div>
       );
   }
}

// 必须给UserAdd定义一个包含router属性的contextTypes
// 使得组件中可以通过this.context.router来使用React Router提供的方法
// this.context.router.push('/user') 跳转
// UserAdd.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };


login = formProvider({
    name: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length > 0;
          },
          error: '请输入用户名'
        },
        {
          pattern: /^.{1,11}$/,
          error: '用户名最多11个字符'
        }
      ]
    },
    password: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length>=6;
          },
          error: '密码最少6个字符'
        }
      ]
    }
  })(login);


login = createForm()(login);
// ReactDOM.render(<BasicInputExampleWrapper />, mountNode);
export default login
