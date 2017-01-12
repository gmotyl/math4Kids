import { combineReducers } from 'redux'
import drawer from './drawer'
import math from './math'
import giphy from './giphy'
import dialogs from './dialogs'
import { i18nReducer } from 'react-redux-i18n';
import { reducer as formReducer } from 'redux-form'

const mainReducer = combineReducers({
    i18n: i18nReducer,
    form: formReducer,
    drawer,
    math,
    giphy,
    dialogs
})

export default mainReducer