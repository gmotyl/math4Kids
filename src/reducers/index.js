import { combineReducers } from 'redux'
import drawer from './drawer'
import math from './math'
import giphy from './giphy'
import { reducer as formReducer } from 'redux-form'

const mainReducer = combineReducers({
    form: formReducer,
    drawer,
    math,
    giphy
})

export default mainReducer