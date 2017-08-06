import React from 'react';

export default class GalleryThumb extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onGalleryThumbClick(this.props.index);
	}

	render() {
		
		let styles = {
			'backgroundImage': `url(${this.props.image.url})`
		};

		return <div onClick={this.handleClick} className={'gallery-thumb '+this.props.active} style={ styles }></div>;
		
	}
}