import { connect } from 'react-redux'
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm, Field } from 'redux-form'
import QuestionBasic from '../components/app/QuestionBasic'
import Giphy from '../components/app/Giphy'
import RenderTextField from '../components/app/RenderTextField'
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import ReplayIcon from 'material-ui/svg-icons/av/replay';

export const mapStateToProps = (state) => {
    return {
        errorText: state.math.error,
        correct: state.math.correct,
    }
}

const style = {
    margin: 5,
};

let BasicForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            { props.correct ?
                <div>
                    <Giphy />
                    <form onSubmit={handleSubmit(props.onNew)}>
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
                <div>
                    <form onSubmit={handleSubmit(props.onSubmit)}>
                        <Flex row alignItems="center">
                            <QuestionBasic/>&nbsp;
                            <div>
                                <Field name="result" component={RenderTextField} label="" errorText={props.errorText}
                                       type="number"/>
                            </div>
                        </Flex>
                        <div style={{textAlign: "center"}}>
                            <RaisedButton label="OK" primary={true} type="submit" style={style} />
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}

// decorate AddForm with reduxForm
BasicForm = reduxForm({
    form: 'BasicForm'
})(BasicForm)

export default BasicForm;
