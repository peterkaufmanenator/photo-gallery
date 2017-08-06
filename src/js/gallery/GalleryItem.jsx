import React from 'react';

export default class GalleryImage extends React.Component {
	render() {
		
		let styles = {
			'backgroundImage': `url(${this.props.image.url})`
		};

		return <div className={'gallery-image '+this.props.visible} style={ styles }>
			<span className="gallery-image-caption">{this.props.caption}</span>
		</div>;
		
	}
}