import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as actions from '../actions'
import React from 'react';

const mapStateToProps = (state) => {
    return {
        isOpen: state.dialogs.optionsDialog.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(actions.hideOptionsDialog())
        }
    }
}

class Options extends React.Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onTouchTap={this.props.handleClose}
                />
        ];

        return (
            <div>
                <Dialog
                    title="Settings"
                    actions={actions}
                    modal={false}
                    open={ this.props.isOpen }
                    onRequestClose={this.props.handleClose}
                    >
                    Options
                </Dialog>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)