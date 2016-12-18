import { connect } from 'react-redux'
import { Field } from 'redux-form'
import { Flex, Item } from 'react-flex';
import Giphy from '../components/app/Giphy'
import RaisedButton from 'material-ui/RaisedButton';
import React, { PropTypes } from 'react';
import 'react-flex/index.css';
import RenderTextField from '../components/app/RenderTextField'
import ReplayIcon from 'material-ui/svg-icons/av/replay';
import QuestionBasic from '../components/app/QuestionBasic'

export const mapStateToProps = (state) => {
    return {
        errorText: state.math.error,
        correct: state.math.correct,
    }
}

const style = {
    margin: 5
};

class BasicForm extends React.Component {
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <div>
                { this.props.correct ?
                    <div>
                        <Giphy />
                        <form onSubmit={handleSubmit(this.props.onNew)}>
                            <div style={{textAlign: "center"}}>
                                <RaisedButton
                                    icon={<ReplayIcon/>}
                                    primary={true}
                                    type="submit"
                                    style={style}
                                    autoFocus
                                />
                            </div>
                        </form>
                    </div>
                    :
                    <div style={{ width: '100%' }}>
                    <div style={{ display: 'table', margin: '0 auto'}}>
                        <form onSubmit={handleSubmit(this.props.onSubmit)}>
                            <Flex row alignItems="center">
                                <QuestionBasic/>&nbsp;
                                <div>
                                    <Field name="result" component={RenderTextField} label=""
                                           errorText={this.props.errorText}
                                           type="number"/>
                                </div>
                            </Flex>
                            <div style={{textAlign: "center"}}>
                                <RaisedButton label="OK" primary={true} type="submit" style={style}/>
                            </div>
                        </form>
                    </div>
                    </div>
                }
            </div>
        );
    }
}

BasicForm.propTypes = {
    errorText: PropTypes.string,
    correct: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onNew: PropTypes.func.isRequired
}

export default BasicForm;
