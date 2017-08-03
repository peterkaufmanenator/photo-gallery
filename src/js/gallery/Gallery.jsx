import React from 'react';
import GalleryItem from './GalleryItem.jsx';
import Scss from './Gallery.scss';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {'data': props.data, 'visibleGalleryItemIndex': 0};
		this.slideLeft = this.slideLeft.bind(this);
		this.slideRight = this.slideLeft.bind(this);

	}

	slideLeft(ev) {
		let visibleGalleryIndex = this.state.visibleGalleryItemIndex;
		if(visibleGalleryIndex === 0) {
			this.setState({'visibleGalleryItemIndex': this.state.data.galleryItems.length - 1});
		}
		else {
			this.setState({'visibleGalleryItemIndex': this.state.visibleGalleryItemIndex - 1});
		}
	}

	slideRight(ev) {
		let visibleGalleryIndex = this.state.visibleGalleryItemIndex;
		console.log((this.state.data.galleryItems.length - 1));
		if(visibleGalleryIndex === (this.state.data.galleryItems.length - 1)) {
			this.setState({'visibleGalleryItemIndex': 0});
		}
		else {
			this.setState({'visibleGalleryItemIndex': this.state.data.visibleGalleryItemIndex + 1});
		}
	}

	render() {
		return <div className="gallery">
			<div className="gallery-images">
				{this.state.data.galleryItems.map((image, index) => {
					let visible = (index === this.state.visibleGalleryItemIndex) ? 'visible': 'invisible'; 
					return <GalleryItem visible={visible} image={image} key={index} />;
				})}
			</div>
			<div className="gallery-title">{this.state.data.galleryTitle}</div>
			<div className="gallery-arrow left-arrow" onClick={this.slideLeft}>
				<i className="fa fa-chevron-left"></i>
			</div>
			<div className="gallery-arrow right-arrow" onClick={this.slideRight}>
				<i className="fa fa-chevron-right"></i>
			</div>
		</div>;
	}
}