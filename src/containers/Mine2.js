import React, { Component } from 'react';
class Mine2 extends Component {
    render() {
        return (
            <div>
                传递的参数：{this.props.match.params.param}
            </div>
        );
    }
}

export default Mine2;