import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const Login = (props) => {
	console.log('State of props is:', props);
	const navigate = useNavigate();
	const [state, setState] = useState({ username: '' });

	const handleChange = (e) => {
		const newState = { ...state };
		newState[e.target.name] = e.target.value;
		setState(newState);
		// props.updateUser(e.target.value);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		document.cookie = 'loggedIn=true;max-age=60*10000';
		props.updateUser(state.username);
		navigate('/');
	};

	return (
		<Container
			sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
		>
			<form
				onSubmit={handleLogin}
				style={{
					width: '60ch',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<TextField
					onChange={handleChange}
					value={state.username}
					id="standard-basic"
					label="Username"
					name="username"
					variant="standard"
				/>
				<TextField id="standard-basic" label="Password" variant="standard" />
				<Button type="submit" variant="contained" style={{ marginTop: '1rem' }}>
					LOGIN
				</Button>
			</form>
		</Container>
	);
};

export default Login;
