import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from '../../Components/Loader';
import Avatar from '../../Components/Avatar';
import FatText from '../../Components/FatText';
import FollowButton from '../../Components/FollowButton';
import SquarePost from '../../Components/SquarePost';

const Wrapper = styled.div`
	min-height: 60vh;
`;

const Header = styled.header``;

const HeaderColumn = styled.div``;

export default ({ loading, data }) => {
	if (loading) {
		return (
			<Wrapper>
				<Loader />
			</Wrapper>
		);
	} else if (!loading && data && data.seeUser) {
		const {
			seeUser: {
				avatar,
				username,
				fullName,
				isFollowing,
				isSelf,
				bio,
				followingCount,
				followersCount,
				postsCount,
				posts
			}
		} = data;
		return (
			<>
				<Header>
					<HeaderColumn>
						<Avatar size="lg" url={avatar} />
					</HeaderColumn>
				</Header>
			</>
		);
	}
};
