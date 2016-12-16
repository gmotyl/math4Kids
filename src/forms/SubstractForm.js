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
            dispatch(fetchGiphy('spongebob'))
            dispatch(reset('SubstractForm'));
            dispatch(actions.newSubstract())
        }
    }
}

class SubstractForm extends BasicForm {
}


// decorate AddForm with reduxForm
SubstractForm = reduxForm({
    form: 'SubstractForm'
})(SubstractForm)

export default connect(mapStateToProps, mapDispatchToProps)(SubstractForm);
