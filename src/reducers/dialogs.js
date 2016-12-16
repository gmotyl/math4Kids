import * as actions from '../actions/index'

/**
 * @param state
 * @param action
 * @returns {*}
 */
const dialogs = (state = { optionsDialog : { open: false } }, action) => {
    switch (action.type) {
        case actions.SHOW_OPTIONS_DIALOG:
            return Object.assign({}, state, {
                optionsDialog: { open: true }
            })

        case actions.HIDE_OPTIONS_DIALOG:
            return Object.assign({}, state, {
                optionsDialog: { open: false }
            })

        default:
            return state
    }
}

export default dialogs
