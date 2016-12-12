import { connect } from 'react-redux'
import React from 'react';
import BasicForm from './BasicForm';
import { mapStateToProps } from './BasicForm';
import { reset } from 'redux-form'
import * as actions from '../actions'
import { fetchGiphy } from '../actions/fetchGiphy'


const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: data  => {
            dispatch(actions.submitResult(data))
        },
        onNew: () => {
            dispatch(fetchGiphy('spongebob+happy'))
            dispatch(reset('addForm'));
            dispatch(actions.newAdd())
        }
    }
}

let AddForm = BasicForm

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
