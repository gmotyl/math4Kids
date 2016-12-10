/**
 *
 * At this point all actions are defined in this file.
 * This file will be split int logical parts when there will be more actions.
 */

/**
 * Action types
 */
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SUBMIT_ADD = 'SUBMIT_ADD'
export const NEW_ADD = 'NEW_ADD'

/**
 * Action Creators
 */
export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER
    }
}

export const submitAdd = (addForm) => {
    return {
        type: SUBMIT_ADD,
        addForm: addForm
    }
}

export const newAdd = (addForm) => {
    return {
        type: NEW_ADD
    }
}
