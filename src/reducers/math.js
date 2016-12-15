import * as actions from '../actions/index'

const initialState = {
    a: 1,
    b: 1,
    correct: false,
    submited: false,
    result: 2,
    operator: '+',
    count: 0
};
/**
 * @param state
 * @param action
 * @returns {*}
 */
const math = (state = initialState, action) => {
    switch (action.type) {
        case actions.NEW_ADD:
            let a = Math.floor(Math.random() * 15) + 1
            let b = Math.floor(Math.random() * (30 - a)) + 1

            return {
                a: a,
                b: b,
                result: a + b,
                submited: false,
                correct: undefined,
                operator : '+'
            }

        case actions.NEW_SUBSTRACT:
            let x
            let y
            let x_y = 0

            while (x_y < 2) {
                x = Math.floor(Math.random() * 29) + 2
                y = Math.floor(Math.random() * 29) + 2
                x_y = x - y
            }

            return {
                a: x,
                b: y,
                result: x_y,
                submited: false,
                correct: undefined,
                operator : '-',
                count: ++state.count
            }

        case actions.NEW_MULTIPLY:
            let multi_a = Math.floor(Math.random() * 9) + 2
            let multi_b = Math.floor(Math.random() * (9 - multi_a)) + 2

            return {
                a: multi_a,
                b: multi_b,
                result: multi_a * multi_b,
                submited: false,
                correct: undefined,
                operator : '*'
            }

        case actions.SUBMIT_RESULT:
            let result = parseInt(action.form.result);
            let correct = state.result === result
            let newState = {
                submited: true,
                correct: correct,
                error: correct ? undefined : "Uppss.."
            }

            return Object.assign({}, state, newState)

        default:
            return state
    }
}

export default math
