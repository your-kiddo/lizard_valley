import React, { Component } from "react";

import lizard from "media/lizard.jpg"

export class Link1 extends Component {
    render() {
        return <p>Link1 works like this kiddo</p>
    }
}
export class Link2 extends Component {
    render() {
        return <p>Link2 works 2 as well xddd</p>
    }
}
export class Link3 extends Component {
    render() {
        return <img src={lizard} alt="if u c this, you are lagging the pic"/>
    }
}

export class About extends Component {
	render() {
		return <p>There is no about, give my your affection :3</p>
	}
}