import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import FatText from '../FatText';
import Avatar from '../Avatar';
import {
	HeartFull,
	HeartEmpty,
	Comment as CommentIcon,
	Prev,
	Next
} from '../Icons';
import DotCarousel from '../DotCarousel';
import Time from '../TimeStamp';
import Loader from '../Loader';

const Post = styled.div`
	${props => props.theme.whiteBox};
	width: 100%;
	max-width: 600px;
	user-select: none;
	margin-bottom: 25px;
	a {
		color: inherit;
	}
`;

const Header = styled.header`
	padding: 15px;
	display: flex;
	align-items: center;
`;

const UserColumn = styled.div`
	margin-left: 10px;
`;

const Location = styled.span`
	display: block;
	margin-top: 5px;
	font-size: 12px;
`;

const Files = styled.div`
	position: relative;
	padding-bottom: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	flex-shrink: 0;
`;

const File = styled.img`
	max-width: 100%;
	width: 100%;
	height: 600px;
	position: absolute;
	top: 0;
	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center;
	opacity: ${props => (props.showing ? 1 : 0)};
	transition: opacity 0.5s linear;
`;

const SlideButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	${props => (props.type === 'prev' ? 'left: 10px' : 'right: 10px')};
	opacity: 0.7;
`;

const Button = styled.span`
	cursor: pointer;
`;

const Meta = styled.div`
	padding: 15px;
	position: relative;
`;

const MetaRow = styled.div`
	position: absolute;
	top: 20px;
	left: 0px;
	width: 100%;
`;

const Buttons = styled.div`
	${Button} {
		&:first-child {
			margin-right: 10px;
		}
	}
	margin-bottom: 10px;
`;

const Timestamp = styled.span`
	font-weight: 400;
	text-transform: uppercase;
	opacity: 0.5;
	display: block;
	font-size: 10px;
	margin: 10px 0px;
	padding-bottom: 10px;
	border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
	border: none;
	width: 100%;
	resize: none;
	font-size: 14px;
	&:focus {
		outline: none;
	}
`;

const Comments = styled.ul`
	margin-top: 10px;
`;

const Comment = styled.li`
	margin-bottom: 7px;
	span {
		margin-right: 5px;
	}
`;

const Caption = styled.div`
	margin: 10px 0px;
`;

const Form = styled.form`
	position: relative;
`;

const ExtendedLoader = styled(Loader)`
	position: absolute;
	top: 5px;
`;

export default ({
	user: { username, avatar },
	location,
	files,
	isLiked,
	likeCount,
	createdAt,
	newComment,
	currentItem,
	slidePrev,
	slideNext,
	toggleLike,
	onKeyPress,
	comments,
	selfComments,
	caption,
	commentLoading
}) => (
	<Post>
		<Header>
			<Avatar size="sm" url={avatar} />
			<UserColumn>
				<Link to={`/${username}`}>
					<FatText text={username} />
				</Link>
				<Location>{location}</Location>
			</UserColumn>
		</Header>
		<Files>
			{files &&
				files.map((file, index) => (
					<File key={file.id} id={file.id} src={file.url} showing={index === currentItem} />
				))}
			{files && files.length > 1 && (
				<>
					<SlideButton type="prev" onClick={slidePrev}>
						<Prev />
					</SlideButton>
					<SlideButton type="next" onClick={slideNext}>
						<Next />
					</SlideButton>
				</>
			)}
		</Files>
		<Meta>
			<MetaRow>
				{files && files.length > 1 && (
					<DotCarousel length={files.length} active={currentItem} />
				)}
			</MetaRow>
			<Buttons>
				<Button onClick={toggleLike}>
					{isLiked ? <HeartFull /> : <HeartEmpty />}
				</Button>
				<Button>
					<CommentIcon />
				</Button>
			</Buttons>
			<FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
			<Caption>
				<FatText text={username} /> {caption}
			</Caption>
			{comments && (
				<Comments>
					{comments.map(comment => (
						<Comment key={comment.id}>
							<Link to={`/${username}`}>
								<FatText text={comment.user.username} />
							</Link>
							{comment.text}
						</Comment>
					))}
					{selfComments.map(comment => (
						<Comment key={comment.id}>
							<Link to={`/${username}`}>
								<FatText text={comment.user.username} />
							</Link>
							{comment.text}
						</Comment>
					))}
				</Comments>
			)}
			<Timestamp>
				<Time createdAt={createdAt} />
			</Timestamp>
			<Form>
				{commentLoading && <ExtendedLoader size={16} />}
				<Textarea
					onKeyPress={onKeyPress}
					placeholder={!commentLoading ? 'Add a comment...' : ''}
					value={newComment.value}
					onChange={newComment.onChange}
					disabled={commentLoading}
				/>
			</Form>
		</Meta>
	</Post>
);
