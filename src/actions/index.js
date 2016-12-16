/**
 *
 * At this point all actions are defined in this file.
 * This file will be split int logical parts when there will be more actions.
 */

/**
 * Action types
 */
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SUBMIT_RESULT = 'SUBMIT_RESULT'
export const NEW_ADD = 'NEW_ADD'
export const NEW_SUBSTRACT = 'NEW_SUBSTRACT'
export const NEW_MULTIPLY = 'NEW_MULTIPLY'
export const REQUEST_GIPHY = 'REQUEST_GIPHY'
export const FETCH_GIPHY = 'FETCH_GIPHY'
export const FETCH_GIPHY_SUCCESS = 'FETCH_GIPHY_SUCCESS'
export const SHOW_OPTIONS_DIALOG = 'SHOW_OPTIONS_DIALOG'
export const HIDE_OPTIONS_DIALOG = 'HIDE_OPTIONS_DIALOG'

/**
 * Action Creators
 */
export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER
    }
}

export const submitResult = (form) => {
    return {
        type: SUBMIT_RESULT,
        form: form
    }
}

export const newAdd = () => {
    return {
        type: NEW_ADD
    }
}

export const newSubstract = () => {
    return {
        type: NEW_SUBSTRACT
    }
}

export const newMultiply = () => {
    return {
        type: NEW_MULTIPLY
    }
}

export const requestGiphy = (tag) => {
    return {
        type: FETCH_GIPHY,
        tag: tag
    }
}

export const fetchGiphySuccess = (imageSrc) => {
    return {
        type: FETCH_GIPHY_SUCCESS,
        imageSrc: imageSrc
    }
}

export const showOptionsDialog = () => {
    return {
        type: SHOW_OPTIONS_DIALOG
    }
}

export const hideOptionsDialog = () => {
    return {
        type: HIDE_OPTIONS_DIALOG
    }
}
