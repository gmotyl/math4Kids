import React, { Component, PropTypes } from 'react';
import { newAdd } from '../../actions'
import { connect } from 'react-redux'

class QuestionBasic extends Component {
    render() {
        return (
            <div className="task">
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch(newAdd())
        },
    }
}

QuestionBasic.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionBasic)
