import AppBar from 'material-ui/AppBar';
import React, { Component, PropTypes } from 'react';

class AppComponent extends Component {
    render() {
        return (
            <div className="app">
                <AppBar
                    title="Math4Kids"
                    onLeftIconButtonTouchTap={ this.props.onDrawerClick }
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        )
    }
}

export default AppComponent
