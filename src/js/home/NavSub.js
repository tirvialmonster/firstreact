import React, { Component } from 'react';


export default class Nav extends Component {
	// constructor(props,context){
	// 	super(props,context);

	// }

	ccc = () => {
		// document.querySelector(".personalPage").scrollIntoView(true);
	}

    render() {
        return (
            <div className="navContainer">
            	<ul>
	            	<li id="personalPage" onClick={this.ccc}></li>
	            	<li id="blogPage"></li>
	            </ul>
            </div>
        );
    }
}
