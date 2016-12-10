import AppBar from 'material-ui/AppBar';
import React, { Component, PropTypes } from 'react';
import { toggleDrawer } from '../../actions'
import { connect } from 'react-redux'
import Drawer from './Drawer'
import AddForm from '../../forms/AddForm'

class AppComponent extends Component {
    render() {
        return (
            <div className="app">
                <AppBar
                    title="Math4Kids"
                    onLeftIconButtonTouchTap={ this.props.onDrawerToggle }
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <AddForm/>
                <Drawer/>
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
            dispatch(toggleDrawer())
        },
    }
}

AppComponent.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent)
