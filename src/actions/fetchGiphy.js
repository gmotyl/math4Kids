import * as actions from './index'

export function fetchGiphy(tag) {
    return function (dispatch) {
        dispatch(actions.requestGiphy())
        const headers = new Headers();
        const myRequest = new Request('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + tag);

        headers.append('Accept', 'application/vnd.github.v3+json');

        return fetch(myRequest)
            .then(response => response.json())
            .then(json => dispatch(actions.fetchGiphySuccess(json.data.image_url)));
    }
}
