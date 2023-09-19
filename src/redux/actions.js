export const updateUser = (user) => {
	return {
		type: 'UPDATE_USER',
		value: user,
	};
};

export const addListing = (newListing) => {
	return {
		type: 'ADD_LISTING',
		value: newListing,
	};
};

export const deleteListing = (index) => {
	return {
		type: 'DELETE_LISTING',
		value: index,
	};
};