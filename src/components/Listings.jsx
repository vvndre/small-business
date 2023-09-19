import React, { useCallback, useState, useMemo, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const containerStyle = {
	width: '100%',
	height: '400px',
	marginBottom: '2rem',
};



const Map = (props) => {
	console.log('Map props are:', props);
	const center = useMemo(() => ({ lat: 30.266, lng: -97.733 }), []);
	const options = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: false,
		}),
		[]
	);
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [map, setMap] = useState(null);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: apiKey,
	});


	const onLoad = useCallback(
		(map) => {
			const geocoder = new window.google.maps.Geocoder();
			geocoder
				.geocode({ address: props.address })
				.then((res) => {
				
					console.log('fetch results are:', res.results);

					console.log(
						'fetch formatted address:',
						res.results[0].formatted_address
					);

					setLat(res.results[0].geometry.location.lat());
					setLng(res.results[0].geometry.location.lng());
				})
				.catch((e) => {
					console.log(e);
				});
		},
		[props.address]
	);

	const onUnmount = useCallback((map) => {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			options={options}
			zoom={11}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker
				position={{ lat: lat, lng: lng }}
				name="Testing"
				color="secondary"
			/>
		</GoogleMap>
	) : (
		<></>
	);
};

export default Map;