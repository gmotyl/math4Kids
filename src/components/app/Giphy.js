import { connect } from 'react-redux'
import React, { Component } from 'react';

const mapStateToProps = (state) => {
    return {
        imageSrc: state.giphy.imageSrc
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

class Giphy extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: "center", marginTop: "5px" }}>
                    <img src={ this.props.imageSrc }
                         style={{ maxWidth: "90%" }}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Giphy);
