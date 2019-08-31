import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Loading } from './Icons';

const Animation = keyframes`
    0%{
        opacity: 0
    }
    50%{
        opacity: 1
    }
    100%{
        opacity: 0
    }
`;

const LoaderContainer = styled.div`
	animation: ${Animation} 1s linear infinite;
	width: 100%;
	text-align: center;
`;

const Loader = ({ className, size = 36 }) => (
	<LoaderContainer>
		<Loading className={className} size={36} />
	</LoaderContainer>
);

Loader.propTypes = {
	className: PropTypes.string,
	size: PropTypes.number
};

export default Loader;
