import { TOGGLE_DRAWER } from '../actions/index'

/**
 * @param state
 * @param action
 * @returns {*}
 */
const drawer = (state = { open: false }, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return Object.assign({}, state, {
                open: !state.open
            })

        default:
            return state
    }
}

export default drawer
