import { combineReducers } from 'redux'
import drawer from './drawer'
import add from './add'
import giphy from './giphy'
import { reducer as formReducer } from 'redux-form'

const mainReducer = combineReducers({
    form: formReducer,
    drawer,
    add,
    giphy
})

export default mainReducer