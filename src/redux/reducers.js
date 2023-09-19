import { combineReducers } from 'redux';

const user = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.value; // Change [action.value] to action.value
    default:
      return state;
  }
};

const listings = (state = [], action) => {
	switch (action.type) {
		case 'ADD_LISTING':
			return [...state, action.value];
		case 'DELETE_LISTING':
			let newState = [...state];
			newState.splice(action.value, 1);
			return newState;
		default:
			return state;
	}
};

const map = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_LOCATION':
			return [...state, action.value];
		default:
			return state;
	}
};

export default combineReducers({ user, listings, map });