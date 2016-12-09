import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import MUIDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { toggleDrawer } from '../../actions'
import { connect } from 'react-redux'

class Drawer extends React.Component {
    render() {
        return (
            <MUIDrawer open={ this.props.isOpen } docked={ false } onRequestChange={ this.props.onDrawerToggle }>
                <AppBar title="Math4Kids" onLeftIconButtonTouchTap={ this.props.onDrawerToggle }/>
                <MenuItem>Dodawanie</MenuItem>
            </MUIDrawer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.drawer.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDrawerToggle: () => {
            dispatch(toggleDrawer())
        }
    }
}

Drawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onDrawerToggle: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
