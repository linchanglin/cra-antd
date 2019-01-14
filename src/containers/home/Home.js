import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import TestRedux from '../test/TestRedux';


class Home extends Component {
    constructor(props, context) {
        super(props, context);
     }

     confirm = () => {
         console.log('confirm')
        this.props.history.push("/list");
      };
    render() {

        return (
            <div style={{ padding: '1rem 0' }} >
                <WingBlank>
                    {/* <Link to="/list"> */}
                        <Button href="/list" type="primary">列表页</Button>
                    {/* </Link> */}
                    <WhiteSpace />
                    {/* <Link to="/mine"> */}
                        <Button href="/mine" type="ghost">个人</Button>
                    {/* </Link> */}
                    <WhiteSpace />
                    {/* <Link to="/test"> */}
                        <Button onClick={this.confirm} type="warning">测试</Button>
                    {/* </Link> */}

                    <WhiteSpace />
                </WingBlank>

            </div>
        )
    }
}



// 如果只是读取数据，那么只需要这一个方法即可。（这里两个写出来只是为了方便理解）
function mapStateToProps(state) {
    return {
        count: state.number.count,
        text: state.number.text
    }
}
// 同理，如果只是设置数据，那么只需要这一个方法即可。
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);