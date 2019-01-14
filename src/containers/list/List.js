import React, { Component } from 'react';
import { get } from '../../fetch/index';

import { Link } from 'react-router-dom';
import { Button, WhiteSpace } from 'antd-mobile';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.getListData()
    }
    getListData() {
        get("./mock/list.json").then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                dataList: json.data
            })
        }).catch(function (err) {
            console.log('err', err);
        })
    }


    back() {
        console.log('22222')
        window.history.back();
    }

    render() {
        let _this = this;
        function createListDom() {
            return {
                __html: _this.state.dataList && _this.state.dataList.map(item => {
                    return '<li>name: ' + item.name + ',age: ' + item.age + '</li>'
                }).join('')
            };
        }

        function back() {
            console.log('11111')
            window.history.back();
        }
        return (
            <div>
                List <br />
                <ul dangerouslySetInnerHTML={createListDom()} />

                <WhiteSpace />
                <WhiteSpace />

                <Button onClick={back} type="primary">列表页</Button>
            </div>
        );
    }
}

export default List;