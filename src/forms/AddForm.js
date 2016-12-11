import { connect } from 'react-redux'
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset } from 'redux-form'
import { submitAdd, newAdd } from '../actions'
import Add from '../components/math/Add'
import Giphy from '../components/app/Giphy'
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';

const renderTextField = ({ input, label, type, meta: { touched, error }, errorText, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               type={type}
               errorText={touched && errorText}
               autoFocus
        {...input}
        {...custom}
        />
)

const mapStateToProps = (state) => {
    return {
        errorText: state.add.error,
        correct: state.add.correct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: data  => {
            dispatch(submitAdd(data))
        },
        onNew: () => {
            dispatch(reset('addForm'));
            dispatch(newAdd())
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
                        <RaisedButton label="--->>>" primary={true} type="submit" style={style} fullWidth={true} autoFocus/>
                    </form>
                    <p><a href="http://giphy.com/gifs/happy-spongebob-squarepants-patrick-TdfyKrN7HGTIY">via GIPHY</a></p>
                </div>
                :
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <Flex row alignItems="center">
                        <Add/>&nbsp;
                        <div>
                            <Field name="result" component={renderTextField} label="" errorText={props.errorText}
                                   type="number"/>
                        </div>
                    </Flex>
                    <div>
                    <RaisedButton label="OK" primary={true} type="submit" style={style} fullWidth={true}/>
                    </div>
                </form>
            }
        </div>
    );
}

// decorate AddForm with reduxForm
AddForm = reduxForm({
    form: 'addForm'
})(AddForm)

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
