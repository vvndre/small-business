import React from 'react';
import Map from './Map';
import { useParams } from 'react-router-dom';
import '../styles/BusinessDetails.css';

const BusinessDetails = (props) => {
	console.log(props.listings);
	let id = useParams();
	console.log(id);
	const business = props.listings.find((b) => b.id == id.id);
	console.log(business);
	return (
		<div className="wrapper">
			<div className="textWrapper">
				<h2>{business.name}</h2>
				<h3>{business.address}</h3>
				<h3>{business.operatingHours}</h3>
				<h4>{business.description}</h4>
				<Map address={business.address} className="map" />
			</div>
		</div>
	);
};

export default BusinessDetails;
