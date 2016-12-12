import { connect } from 'react-redux'
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset } from 'redux-form'
import * as actions from '../actions'
import { fetchGiphy } from '../actions/fetchGiphy'
import Add from '../components/math/Add'
import Giphy from '../components/app/Giphy'
import RenderTextField from '../components/app/RenderTextField'
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import ReplayIcon from 'material-ui/svg-icons/av/replay';

const mapStateToProps = (state) => {
    return {
        errorText: state.add.error,
        correct: state.add.correct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: data  => {
            dispatch(actions.submitAdd(data))
        },
        onNew: () => {
            dispatch(fetchGiphy('spongebob+happy'))
            dispatch(reset('addForm'));
            dispatch(actions.newAdd())
        }
    }
}

const style = {
    margin: 5,
};

let AddForm = props => {
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
                    <p><a href="http://giphy.com/gifs/happy-spongebob-squarepants-patrick-TdfyKrN7HGTIY">via GIPHY</a></p>
                </div>
                :
                <div>
                    <form onSubmit={handleSubmit(props.onSubmit)}>
                        <Flex row alignItems="center">
                            <Add/>&nbsp;
                            <div>
                                <Field name="result" component={RenderTextField} label="" errorText={props.errorText}
                                       type="number"/>
                            </div>
                        </Flex>
                        <RaisedButton label="OK" primary={true} type="submit" style={style} fullWidth={true}/>
                    </form>
                </div>
            }
        </div>
    );
}

// decorate AddForm with reduxForm
AddForm = reduxForm({
    form: 'addForm'
})(AddForm)

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
