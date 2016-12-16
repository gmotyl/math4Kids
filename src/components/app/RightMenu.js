import React, { PropTypes } from 'react'
import * as actions from '../../actions'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux'

const RightMenu = (props) => (
    <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="Ustawienia" onTouchTap={ props.onOptionsTouchTap } />
    </IconMenu>
);

const mapDispatchToProps = (dispatch) => {
    return {
        onOptionsTouchTap: () => {
            dispatch(actions.showOptionsDialog())
        }
    }
}

RightMenu.propTypes = {
    onOptionsTouchTap: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(RightMenu)
