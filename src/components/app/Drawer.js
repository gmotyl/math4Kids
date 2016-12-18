import * as actions from '../../actions'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import MUIDrawer from 'material-ui/Drawer'
import React, { PropTypes } from 'react'
import { reset } from 'redux-form'
import { toggleDrawer } from '../../actions'
import { Link } from 'react-router'

class Drawer extends React.Component {
    render() {
        return (
            <MUIDrawer open={ this.props.isOpen } docked={ false } onRequestChange={ this.props.onDrawerToggle }>
                <AppBar title="Math4Kids" onLeftIconButtonTouchTap={ this.props.onDrawerToggle }/>
                <Menu  onItemTouchTap={this.props.onItemTouchTap}>
                    <MenuItem value="add" containerElement={<Link to='/'/>}>Dodawanie</MenuItem>
                    <MenuItem value="substract" containerElement={<Link to='substract'/>}>Odejmowanie</MenuItem>
                    <MenuItem value="multiply" containerElement={<Link to='multiply'/>}>Mnożenie</MenuItem>
                </Menu>
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
        },
        onItemTouchTap: (event, menuItem, index) => {
            dispatch(reset('AddForm'));
            dispatch(reset('SubstractForm'));
            dispatch(reset('MultiplyForm'));
            dispatch(toggleDrawer())

            switch (menuItem.props.value) {
                case "add" :
                    return dispatch(actions.newAdd())
                case "substract" :
                    return dispatch(actions.newSubstract())
                case "multiply" :
                    return dispatch(actions.newMultiply())
                default:
                    return null
            }
        }
    }
}

Drawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onDrawerToggle: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
