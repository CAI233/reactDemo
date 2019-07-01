
/*
   Home 主页
*/
import React, { Component } from 'react';
import { Carousel, WingBlank ,Grid} from 'antd-mobile';

import MyComponent from './comments/commentFoot.js';
import './home.css';

class home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
   render() {
    let container = {
        paddingBottom:'50px'
    }
      return (
        <div id="container" style={container}>
            <WingBlank>
                <Carousel
                autoplay={true}
                infinite={true}
                autoplayInterval={1500}
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
            
            <MyComponent />
        </div>
      );
   }
}
 
export default home;

