import * as actions from '../../actions'
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'
import Drawer from './Drawer'
import React, { Component, PropTypes } from 'react';
import Settings from '../../dialogs/Settings'
import IconButton from 'material-ui/IconButton';

class AppComponent extends Component {
    render() {
        return (
            <div className="app">
                <AppBar
                    title="Math4Kids"
                    onLeftIconButtonTouchTap={ this.props.onDrawerToggle }
                    onRightIconButtonTouchTap={ this.props.onSettingsTouchTap }
                    iconElementRight={<IconButton><ActionSettings /></IconButton>}
                />
                <Drawer/>
                <Settings/>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // this is dummy function now, but it will be filled as project will grow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDrawerToggle: () => {
            dispatch(actions.toggleDrawer())
        },
        onSettingsTouchTap: () => {
            dispatch(actions.showSettingsDialog())
        }
    }
}

AppComponent.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent)
