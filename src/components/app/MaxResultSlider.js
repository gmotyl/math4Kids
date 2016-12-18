import * as actions from '../../actions/index'
import { connect } from 'react-redux'
import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const mapStateToProps = (state) => {
    return {
        maxResult: state.math.maxResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSlider: (event, value) => {
            dispatch(actions.changeMaxResult(value))
        }
    }
}
class MaxResultSlider extends Component {

    render() {
        return (
            <div>
                <Slider
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={50}
                    value={this.props.maxResult}
                    onChange={this.props.handleSlider}
                    />
                <p>
                    <span>{'Max result: '}</span>
                    <span>{this.props.maxResult}</span>
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaxResultSlider)
