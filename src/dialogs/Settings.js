import * as actions from '../actions'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MaxResultSlider from '../components/app/MaxResultSlider'
import React from 'react';

const mapStateToProps = (state) => {
    return {
        isOpen: state.dialogs.settingsDialog.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(actions.hideSettingsDialog())
        }
    }
}

class Settings extends React.Component {
    render() {
        const dialogActions = [
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.props.handleClose}
            />
        ];

        return (
            <div>
                <Dialog
                    title="Settings"
                    actions={dialogActions}
                    modal={false}
                    open={ this.props.isOpen }
                    onRequestClose={this.props.handleClose}
                >
                    <MaxResultSlider/>
                </Dialog>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)