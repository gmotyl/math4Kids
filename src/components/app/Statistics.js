import { connect } from 'react-redux'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { red500, greenA200 } from 'material-ui/styles/colors';
import React, { Component } from 'react';

const iconStyles = {
    marginRight: 24
};

class Statistics extends Component {
    render() {
        return (
            <div className="task" style={{ fontSize: '20px', padding: '15px'}}>
                { this.props.doneCount } <ActionThumbUp color={greenA200 } style={{marginRight: 24}} />
                <ActionThumbDown color={red500} style={{marginLeft: 24}} /> { this.props.errorCount }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        doneCount: state.math.doneCount,
        errorCount: state.math.errorCount
    }
}

export default connect(
    mapStateToProps,
    null
)(Statistics)
