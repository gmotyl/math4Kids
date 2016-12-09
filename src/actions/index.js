/**
 *
 * At this point all actions are defined in this file.
 * This file will be split int logical parts when there will be more actions.
 */

/**
 * Action types
 */
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

/**
 * Action Creators
 */
export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER
    }
}
