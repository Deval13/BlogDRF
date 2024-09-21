import React, { useState, useEffect } from 'react';
// import axiosInstance from '../axios';
import { axiosInstance } from '../axois';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

export const Search = () => {
	// const classes = useStyles();
	const search = 'search';
	const [appState, setAppState] = useState({
		posts: [],
	});

	useEffect(() => {
		console.log("searched item " + search);
		
		console.log(search + "/" + window.location.search);
		
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log("search data = " + res.data);
		});
	}, []);
	return (
		<React.Fragment>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{appState.posts.map((post) => {
						return (
							<div key={post.id} className="flex flex-col shadow-lg rounded-lg overflow-hidden m-8">
								<a href={'/posts/' + post.slug}>
									<img
										className="h-48 w-full object-cover"
										src= {post.image}
										alt="Image title"
									/>
								</a>
								<div className="p-4 flex-grow">
									<h2 className="text-lg font-semibold mb-2">{post.title.substr(0, 50)}...</h2>
									<p className="text-sm text-gray-500">{post.excerpt.substr(0, 40)}...</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};
