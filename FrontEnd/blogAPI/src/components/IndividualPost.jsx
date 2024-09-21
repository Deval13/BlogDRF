import { useState, useEffect } from 'react';
import { axiosInstance } from '../axois';
import { useParams } from 'react-router-dom';
//MaterialUI
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export function IndividualPost() {
	const { slug } = useParams();
	// const classes = useStyles();

	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get("posts/"+slug).then((res) => {
			setData({ posts: res.data });
			console.log(res.data);
		});
	}, []);


	const [userid , setUsersId] = useState('')
    
    const setUserId = useEffect(() => {
        axiosInstance.get('admin/getid').then((res) => {
            setUsersId(res.data[0].user_name)
            console.log(res.data)
        })
    } , [])

	return (
		<div className="container mx-auto max-w-4xl mt-16 border bg-slate-200 rounded-lg shadow m-8">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					{data.posts.title}
				</h1>
				<p className="text-lg text-gray-600 mb-8">
					{data.posts.excerpt}
				</p>
			</div>
			<div className='flex flex-start'>
				{userid}
			</div>
		</div>
	);
}