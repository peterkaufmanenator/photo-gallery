import React from 'react';

export default class GalleryImage extends React.Component {
	render() {
		return <div className={'gallery-image '+this.props.visible}>
			<img src={this.props.image.url} />
			<span className="gallery-image-caption">{this.props.caption}</span>
		</div>;
	}
}