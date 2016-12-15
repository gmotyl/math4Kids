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
        case actions.REQUEST_GIPHY:
            return Object.assign({}, state, { done: false})

        case actions.FETCH_GIPHY_SUCCESS:
            var img = new Image();
            img.src = action.imageSrc;

            return Object.assign({}, state, {
                done: true,
                imageSrc: action.imageSrc
            })

        default:
            return state
    }
}

export default giphy
