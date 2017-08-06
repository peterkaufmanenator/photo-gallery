import React from 'react';

export default class GalleryThumb extends React.Component {
	render() {
		
		let styles = {
			'backgroundImage': `url(${this.props.image.url})`
		};

		return <div className={'gallery-thumb '+this.props.active} style={ styles }></div>;
		
	}
}