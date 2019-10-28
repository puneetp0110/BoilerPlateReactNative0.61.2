import React, { Component } from 'react';
import UserView from './UserView';
import { connect } from 'react-redux';

class UserContainer extends Component {
    render() {
        return <UserView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);
