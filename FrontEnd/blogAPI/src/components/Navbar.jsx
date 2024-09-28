import  { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { useNavigate } from 'react-router-dom';
// import  {ReactComponent as AddpostSvg} from '../media/addpost.svg'

import '../index.css'

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#9CA3AF',
		borderBottom: `1px solid ${theme.palette.divider}`

	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));

export function Header() {
	// const classes = useStyles();
	const navigate = useNavigate();
	const [data, setData] = useState({ search: '' });
  const [underline ,setUnderline] = useState('')
	const goSearch = () => {
		console.log("Navbar component" + data.search);
		console.log(" Navbar component2" + '?search=' + data.search)
		navigate({
			pathname: '/search/',
			search: '?search=' + data.search
		});
  };
  
  return (
		<header className="bg-light border-bottom shadow-sm">
      <div className="container d-flex justify-content-between align-items-center p-3">
        <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
				<div>
					<NavLink to="/" className="h1 text-dark text-decoration-none">
						BlogByte
					</NavLink>
				</div>
				<div className="d-flex gap-3">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`nav-link ${isActive ? 'fw-bold text-decoration-underline' : ''}`
						}
					>
						Home
					</NavLink>

					<NavLink
						to="/admin/create"
						className={({ isActive }) =>
							`nav-link ${isActive ? 'fw-bold text-decoration-underline' : ''}`
						}
					>
						Create Post
          </NavLink>
          

          <NavLink
						to="/admin"
						className={({ isActive }) =>
							`nav-link ${isActive ? 'fw-bold text-decoration-underline' : ''}`
						}
					>
						My Posts
					</NavLink>

					
				</div>

				<SearchBar
					value={data.search}
					onChange={(newValue) => setData({ search: newValue })}
					onRequestSearch={() => goSearch()}
				/>

				<nav className="d-flex align-items-center">
					<NavLink
						to="/register"
						className={({ isActive }) =>
							`nav-link ${isActive ? 'btn btn-primary text-decoration-underline' : ''}`
						}
					>
						Register
					</NavLink>

					<NavLink
						to="/login"
						className={({ isActive }) =>
							`nav-link ${isActive ? 'btn btn-primary text-decoration-underline' : ''}`
						}
					>
						Login
					</NavLink>

					<a onClick={() => { navigate('/logout'); }} className="nav-link">
						<svg
							fill="#000000"
							viewBox="0 0 384.971 384.971"
							className="w-6 h-6"
						>
							<g id="Sign_Out">
								<path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z" />
								<path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" />
							</g>
						</svg>
					</a>
				</nav>
			</div>
		</header>
	);

	// return (
	// <header className="bg-gray-300 border-b-2 shadow-md" >
	// 		<div className="container mx-auto p-4 flex flex-row justify-between gap-8 items-center">
	// 	<div> <NavLink to="/" className="text-2xl font-bold text-gray-800">
  //         BlogByte
	// 			</NavLink></div>
  //       {/* Logo or Title */}
	// 			<div className='flex flex-row gap-4 justify-between'>
  //         {underline == 'home' ? <a style={{textDecoration: 'underline'}} onClick={() => {
  //           // setUnderline()  
	// 				navigate('/')
	// 				}} >Home 
  //         </a> : <a onClick={() => {
  //           setUnderline('home')
	// 				navigate('/')
	// 				}} >
	// 					Home 
  //         </a>} 
          

	// 			{underline == 'createpost' ? <a href="" style={{textDecoration: 'underline'}} className='hover:bg-grey-800' onClick={() => {
	// 				navigate('/admin/create')
  //         }} >Create Post</a> : <a
              
  //           href="" className='hover:bg-grey-800' onClick={() => {
  //             setUnderline('createpost')
	// 				navigate('/admin/create')
	// 			}} >Create Post</a>}

         
	// 			<button className="bg-gray-700 text-white px-2 py-2 rounded-2xl hover:bg-gray-800" onClick={() => { navigate('/admin') }} >
	// 			  MyPosts
	// 			</button>
        

	// 	</div>
	// 			{/* Search Bar */}
	// 			{/* <SearchBar
	// // 					value={data.search}
	// // 					onChange={(newValue) => setData({ search: newValue })}
	// // 					onRequestSearch={() => goSearch()}
	// // 				/> */}
        
	// 	            <SearchBar
	// 					value={data.search}
	// 					onChange={(newValue) => setData({ search: newValue })}
	// 					onRequestSearch={() => goSearch()}
	// 				/>		

  //       {/* Navigation Links */}
  //       <nav className="flex space-x-4 items-center">
  //         <NavLink
	// 					to="/register"
	// 					 className="bg-gray-700 text-white px-2 py-2 rounded-2xl hover:bg-gray-800"
  //         >
  //           Register
  //         </NavLink>

  //         <NavLink
	// 					to="/login"
	// 					 className="bg-gray-700 text-white px-4 py-2 rounded-2xl hover:bg-gray-800"
  //         >
  //           Login
  //         </NavLink>

  //         <a onClick={() => { navigate('/logout') }} >
			
	// 		   <svg
  //   fill="#000000"
  //   version="1.1"
  //   id="Capa_1"
  //   xmlns="http://www.w3.org/2000/svg"
  //   xmlnsXlink="http://www.w3.org/1999/xlink"
  //   viewBox="0 0 384.971 384.971"
  //   xmlSpace="preserve"
  //   className="w-6 h-6 ml-2" // Adjust size as needed
  // >
  //   <g id="Sign_Out">
  //     <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
  //       C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
  //       C192.485,366.299,187.095,360.91,180.455,360.91z"/>
  //     <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
  //       c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
  //       c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
  //   </g>
  // </svg>	  
	// 	  </a>

         
  //       </nav>
  //     </div>
  //   </header>
  // );	
}
