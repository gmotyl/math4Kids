import { combineReducers } from 'redux'
import drawer from './drawer'
import add from './add'
import { reducer as formReducer } from 'redux-form'

const mainReducer = combineReducers({
    form: formReducer,
    drawer,
    add
})

export default mainReducer