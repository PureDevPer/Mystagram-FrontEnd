import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

const Container = styled.div``;

const TimeStamp = ({ createdAt }) => {
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');
	const date = new Date(createdAt);
	return <Container>{timeAgo.format(date)}</Container>;
};

TimeStamp.propType = {
	createdAt: PropTypes.string.isRequired
};

export default TimeStamp;
