import React from 'react';
import { gql } from 'apollo-boost';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';
import { useQuery } from 'react-apollo-hooks';

// Use @client query
// If I don't use it, react-apollo sends the query to API
const QUERY = gql`
	{
		isLoggedIn @client
	}
`;

export default () => {
	const {
		data: { isLoggedIn }
	} = useQuery(QUERY);

	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalStyles />
				<Router isLoggedIn={isLoggedIn} />
			</>
		</ThemeProvider>
	);
};
