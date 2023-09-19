import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from './Map';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/AddListing.css';

const AddListing = (props) => {
	console.log('Add listing props:', props);
	const navigate = useNavigate();
	const [listing, setListing] = useState({
		name: '',
		description: '',
		operatingHours: '',
		address: '',
	});

	const handleChange = (e) => {
		const newListing = { ...listing };
		newListing[e.target.id] = e.target.value;
		setListing(newListing);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = { ...listing };
		payload.id = props.listings.length + 1;
		props.addListing(payload);

		setListing({
			name: '',
			description: '',
			operatingHours: '',
			address: '',
		});
		navigate('/');
	};

	console.log(listing.address);

	return (
		<div className="main">
			<div className="formContainer">
				<form onSubmit={handleSubmit} className="form">
					<TextField
						variant="standard"
						name="name"
						label="Name"
						type="text"
						id="name"
						value={listing.name}
						onChange={handleChange}
					/>
					<TextField
						variant="standard"
						name="description"
						label="Description"
						type="text"
						id="description"
						value={listing.description}
						onChange={handleChange}
					/>
					<TextField
						variant="standard"
						name="operatingHours"
						label="Hours (ex: 8AM - 9PM)"
						type="text"
						id="operatingHours"
						value={listing.operatingHours}
						onChange={handleChange}
					/>
					<TextField
						variant="standard"
						name="address"
						label="Address"
						type="text"
						id="address"
						value={listing.address}
						onChange={handleChange}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						style={{ marginTop: '1rem', width: '50%' }}
					>
						Save
					</Button>
				</form>
			</div>
			<div className="mapContainer">
				<Map address={listing.address} />
			</div>
		</div>
	);
};

export default AddListing;