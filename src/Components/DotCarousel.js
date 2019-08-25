import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import lodash from 'lodash';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Dot = styled.div`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	border-radius: 50%;
	background-color: ${props =>
		props.active ? props.theme.blueColor : props.theme.greyColor};
	&:not(:last-child) {
		margin-right: ${props => props.margin}px;
	}
`;

const DotCarousel = ({ length, active, size = 7, margin = 5 }) => {
	return (
		<Container>
			{lodash.times(length, Number).map(index => (
				<Dot
					key={index}
					size={size}
					margin={margin}
					active={index === active}
				/>
			))}
		</Container>
	);
};

DotCarousel.propTypes = {
	length: PropTypes.number.isRequired,
	active: PropTypes.number.isRequired,
	size: PropTypes.number
};

export default DotCarousel;
