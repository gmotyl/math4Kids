import { combineReducers } from 'redux'
import drawer from './drawer'
import math from './math'
import giphy from './giphy'
import dialogs from './dialogs'
import { reducer as formReducer } from 'redux-form'

const mainReducer = combineReducers({
    form: formReducer,
    drawer,
    math,
    giphy,
    dialogs
})

export default mainReducer