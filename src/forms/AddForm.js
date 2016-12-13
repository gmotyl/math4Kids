import { connect } from 'react-redux'
import React from 'react';
import BasicForm from './BasicForm';
import { mapStateToProps } from './BasicForm';
import { reset } from 'redux-form'
import * as actions from '../actions'
import { fetchGiphy } from '../actions/fetchGiphy'
import { reduxForm } from 'redux-form'


const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: data  => {
            dispatch(actions.submitResult(data))
        },
        onNew: () => {
            dispatch(fetchGiphy('spongebob+happy'))
            dispatch(reset('AddForm'));
            dispatch(actions.newAdd())
        }
    }
}

class AddForm extends BasicForm {
}


// decorate AddForm with reduxForm
AddForm = reduxForm({
    form: 'AddForm'
})(AddForm)

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
