import React, { Component, PropTypes } from 'react';
import { newAdd } from '../../actions'
import { connect } from 'react-redux'

class Add extends Component {
    render() {
        return (
            <div className="task">
                { this.props.a } + { this.props.b } =
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        a: state.add.a,
        b: state.add.b
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch(newAdd())
        },
    }
}

Add.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)
