import { connect } from 'react-redux'
import React, { Component } from 'react';

class QuestionBasic extends Component {
    render() {
        return (
            <div className="task" style={{ fontSize: '40px', padding: '15px'}}>
                { this.props.a } { this.props.operator } { this.props.b } =
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        a: state.math.a,
        b: state.math.b,
        operator: state.math.operator
    }
}

export default connect(
    mapStateToProps,
    null
)(QuestionBasic)
