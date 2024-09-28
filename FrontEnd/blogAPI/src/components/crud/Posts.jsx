import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

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

export const Posts = (props) => {
	const { posts } = props;
	
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="xl" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell align="left">Title</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
                                {posts.map((post , index) => {
                                    console.log("posts are = " + post);               
									return (
										<TableRow key={post.id} >
											<TableCell component="th" scope="row">
												{index}
											</TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/posts/' + post.slug}
													className={classes.link}
												>
													{post.title}
												</Link>
											</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/admin/edit/' + post.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + post.id }
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Post
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
    );

    // tailwind code with error
    // return (
	// 	<div className="container mx-auto px-4 w-full">
	// 		<div className="bg-white shadow-md rounded-lg overflow-hidden">
	// 			<table className="min-w-full divide-y divide-gray-200">
	// 				<thead className="bg-gray-50">
	// 					<tr>
	// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
	// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
	// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
	// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
	// 					</tr>
	// 				</thead>
	// 				<tbody className="bg-white divide-y divide-gray-200">
	// 					{posts.map((post) => {
	// 						console.log("posts are =", post);

	// 						return (
	// 							<tr key={post.id}>
	// 								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.id}</td>
	// 								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.category}</td>
	// 								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
	// 									<Link to={`/posts/${post.slug}`} className="text-blue-600 hover:underline">{post.title}</Link>
	// 								</td>
	// 								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
	// 									<Link to={`/admin/edit/${post.id}`} className="text-blue-600 hover:underline">
	// 										<EditIcon />
	// 									</Link>
	// 									<Link to={`/admin/delete/${post.id}`} className="text-blue-600 hover:underline ml-4">
	// 										<DeleteForeverIcon />
	// 									</Link>
	// 								</td>
	// 							</tr>
	// 						);
	// 					})}
	// 					<tr>
	// 						<td colSpan={4} className="px-6 py-4 text-right">
	// 							<Link to="/admin/create" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
	// 								New Post
	// 							</Link>
	// 						</td>
	// 					</tr>
	// 				</tbody>
	// 			</table>
	// 		</div>
	// 	</div>
	// );
};
