import React from 'react';

var Giphy = React.createClass({
    getInitialState() {
        return {
            imageSrc: ""
        }
    },

    getDefaultProps() {
        return {
            apiKey: "dc6zaTOxFJmzC",
            keyword: "cat"
        }
    },

    loadImage() {
        let headers = new Headers();
        headers.append('Accept', 'application/vnd.github.v3+json');
        let myRequest = new Request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy+spongebob');
        let self = this

        fetch(myRequest)
            .then((response) => { return response.json()})
            .then((responseJson) => {
                self.setState({ imageSrc: responseJson.data.image_url})
            });
    },

    componentDidMount() {
        this.loadImage();
    },

    render() {
        return <div style = {{textAlign: "center"}}>
            <img src={this.state.imageSrc}
                 style={{maxWidth: "90%", maxHeight:"400px"}}/>
        </div>
    }})

export default Giphy