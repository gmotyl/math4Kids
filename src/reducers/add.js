import * as actions from '../actions/index'

/**
 * @param state
 * @param action
 * @returns {*}
 */
const add = (state = { a: 1, b: 1, submited: false, correct: false, result: ""}, action) => {
    switch (action.type) {
        case actions.NEW_ADD:
            return {
                a: Math.floor(Math.random() * 15) + 1,
                b: Math.floor(Math.random() * 15) + 1,
                submited: false,
                result: undefined,
                correct: undefined,
            }

        case actions.SUBMIT_ADD:
            let result = parseInt(action.addForm.result);
            let correct = state.a + state.b === result
            let newState = {
                submited: true,
                result: result,
                correct: correct,
                error: correct ? undefined : "Uppss.."
            }

            return Object.assign({}, state, newState)

        default:
            return state
    }
}

export default add
