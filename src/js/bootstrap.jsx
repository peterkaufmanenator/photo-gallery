import Data from '../data/gallery.json';
import ReactDOM from 'react-dom';
import React from 'react';
import Gallery from './gallery/Gallery.jsx';

export default function bootstrapGallery() {
	ReactDOM.render(
		<Gallery />,
		document.getElementById('app')
	)
}