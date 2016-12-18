import * as actions from '../actions/index'

const initialState = {
    a: 1,
    b: 1,
    correct: false,
    submited: false,
    result: 2,
    operator: '+',
    count: 0,
    maxResult : 30
};

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}


/**
 * @param state
 * @param action
 * @returns {*}
 */
const math = (state = initialState, action) => {
    var a
    var b
    var result = 0

    function generateRandomNumbers(resultCallback, maxA = undefined, maxB = undefined) {
        do {
            a = getRandomInt(2, maxA ? maxA : state.maxResult)
            b = getRandomInt(2, maxB ? maxB : state.maxResult)
            result = resultCallback(a, b)

        } while (result > state.maxResult || result < 1)
    }

    switch (action.type) {
        case actions.NEW_ADD:
            generateRandomNumbers(function(a, b) {
                return a + b
            })

            return {
                    ...state,
                    a: a,
                    b: b,
                    result: result,
                    submited: false,
                    correct: undefined,
                    operator : '+'
            }

        case actions.NEW_SUBSTRACT:
            generateRandomNumbers(function(a, b) {
                return a - b
            })

            return {
                ...state,
                a: a,
                b: b,
                result: result,
                submited: false,
                correct: undefined,
                operator : '-',
                count: ++state.count
            }

        case actions.NEW_MULTIPLY:
            generateRandomNumbers(function(a, b) { return a * b }, 10, 10)

            return {
                ...state,
                a: a,
                b: b,
                result: result,
                submited: false,
                correct: undefined,
                operator : '*'
            }

        case actions.SUBMIT_RESULT:
            const correct = state.result === parseInt(action.form.result)

            return {
                ...state,
                submited: true,
                correct: correct,
                error: correct ? undefined : "Uppss.."
            }

        default:
            return state
    }
}

export default math
