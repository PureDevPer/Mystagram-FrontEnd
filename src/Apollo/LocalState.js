export const defaults = {
	// isLoggedIn: localStorage.getItem('token') !== null ? true : false
	isLoggedIn: Boolean(localStorage.getItem('token')) || false
};

export const resolvers = {
	Mutation: {
		logUserIn: (_, { token }, { cache }) => {
			localStorage.setItem('token', token);
			// Modify Apollo Cache, which if it changes, will re-render the app
			cache.writeData({
				data: {
					isLoggedIn: true
				}
			});
			return null;
		},
		logUserOut: (_, __, { cache }) => {
			localStorage.removeItem('token');
			window.location = '/';
			return null;
		}
	}
};
