import React,{Component} from 'react';
import { TabBar } from 'antd-mobile';

// class TabBarList extends React.Component{

//     constructor(props) {
//         super(props);
//         console.log(this.allPage);
//     }

//     render() {
//         let {list} = this.state;
//         return (
//         <div className="content">
//                 {
//         list.map(data => <li key={data.id}>{data.title}</li>)
//                 }
//         </div>
//         );
//     }
    
// }


class MyComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页',
            hidden: false,
            fullScreen: false,
            allPage:[
                {title:'首页',iconf:'icon--210'},
                {title:'商品',iconf:'icon--401'},
                {title:'订单',iconf:'icon--421'},
                {title:'团队',iconf:'icon--110'},
                {title:'我的',iconf:'icon--91'}
            ]
        };
    }
    render() {
        let BarStyle = {
            position: 'fixed',
            zIndex:'999',
            width:'100%',
            bottom:0,
        }
        let nowPage = this.state.allPage;
        return (
            <div style={BarStyle}>
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" prerenderingSiblingsNumber="0" tabBarPosition="bottom" hidden={this.state.hidden}>
                {nowPage.map(item => <TabBar.Item
                    title={item.title}
                    key={item.title}
                    icon={<i style={{fontSize:'20px'}} className={'iconfont '+item.iconf}></i>}
                    selectedIcon={<i style={{fontSize:'20px'}} className={'iconfont '+item.iconf}></i>}
                    selected={this.state.selectedTab === item.title}
                    // badge={1}
                    onPress={() => {
                        console.log(item.title);
                     this.setState({
                         selectedTab: item.title,
                     });
                    }}
                ></TabBar.Item>)}
             </TabBar>
            </div> 
        );
    }
}

export default MyComponent