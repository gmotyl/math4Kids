import * as actions from '../actions/index'

/**
 * @param state
 * @param action
 * @returns {*}
 */
const dialogs = (state = { settingsDialog : { open: false } }, action) => {
    switch (action.type) {
        case actions.SHOW_SETTINGS_DIALOG:
            return {
                ...state,
                settingsDialog: { open: true }
            }

        case actions.HIDE_SETTINGS_DIALOG:
            return {
                ...state,
                settingsDialog: { open: false }
            }

        default:
            return state
    }
}

export default dialogs
