import React, { Component } from 'react';

class Giphy extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            imageSrc: "",
            apiKey: "dc6zaTOxFJmzC",
            keyword: "cat"
        };

        this.loadImage = this.loadImage.bind(this);
        this.loadImage();
    };

    loadImage() {
        let headers = new Headers();
        headers.append('Accept', 'application/vnd.github.v3+json');
        let myRequest = new Request('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy+spongebob');
        let self = this

        fetch(myRequest)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                self.setState({imageSrc: responseJson.data.image_url})
            });
    }

    render() {
        return (
            <div>
                <div style={{textAlign: "center"}}>
                    <img src={this.state.imageSrc}
                         style={{maxWidth: "90%"}}/>
                </div>
            </div>
        )
    }
}

export default Giphy