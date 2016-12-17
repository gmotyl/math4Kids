import * as actions from '../actions/index'

const defaultState = {
    imageSrc: "",
    apiKey: "dc6zaTOxFJmzC",
    done: false
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
const giphy = (state = defaultState, action) => {
    switch (action.type) {
        case actions.REQUEST_GIPHY: {
            return { ...state,  done: false }
        }
        case actions.FETCH_GIPHY_SUCCESS: {
            return {
                ...state,
                done: true,
                imageSrc: action.imageSrc
            }
        }
        default:
            return state
    }
}

export default giphy
