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

	const goSearch = () => {
		console.log("Navbar component" + data.search);
		console.log(" Navbar component2" + '?search=' + data.search)
		navigate({
			pathname: '/search/',
			search: '?search=' + data.search
		});
	};

	return (
	<header className="bg-gray-300 border-b-2 shadow-md" >
			<div className="container mx-auto p-4 flex flex-row justify-between gap-8 items-center">
		<div> <NavLink to="/" className="text-2xl font-bold text-gray-800">
          BlogByte
				</NavLink></div>
        {/* Logo or Title */}
				<div className='flex flex-row gap-4 justify-between'>
					<a onClick={() => {
					navigate('/')
					}} >
						<svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 112.07"
            className="w-9 h-9" // Tailwind classes to set size
        >
            <style>
                {`
                    .st0 {
                        fill-rule:evenodd;
                        clip-rule:evenodd;
                    }
                `}
            </style>
            <g>
                <path
                    className="st0"
                    d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"
                />
            </g>
        </svg>
					</a>
				<a href="" className='hover:bg-grey-800' onClick={() => {
					navigate('/admin/create')
				}} >
					<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 125"
    className="w-12 h-12 ml-2"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
  >
    <path d="M92.878,12.877c0,1.021-0.398,1.981-1.12,2.704L55.509,51.832c-0.984,0.85-5.537,2.229-10.853,3.374  
      c1.599-4.993,3.295-9.14,4.176-10.027L85.094,8.916c0.723-0.72,1.683-1.12,2.704-1.12c1.021,0,1.981,0.4,2.702,1.12l1.259,1.259  
      C92.481,10.898,92.878,11.857,92.878,12.877z M80.369,36.289v51.495c0,2.436-1.983,4.419-4.419,4.419H11.541  
      c-2.436,0-4.419-1.983-4.419-4.419v-62.48c0-2.436,1.983-4.419,4.419-4.419h52.266L44.173,40.52  
      c-1.063,1.061-2.603,3.229-5.105,10.62c-1.305,3.855-2.247,7.308-2.287,7.453c-0.297,1.083-0.018,2.24,0.734,3.073  
      c0.63,0.698,1.522,1.087,2.445,1.087c0.18,0,0.36-0.015,0.54-0.046c0.158-0.026,3.93-0.655,8.11-1.643  
      c8.107-1.918,10.429-3.444,11.547-4.562L80.369,36.289z M74.775,72.914c0-1.819-1.474-3.295-3.295-3.295  
      c-1.819,0-3.295,1.476-3.295,3.295v6.864c0,0.051-0.04,0.09-0.09,0.09H21.199c-1.821,0-3.295,1.476-3.295,3.295  
      c0,1.821,1.474,3.295,3.295,3.295h46.896c3.684,0,6.68-2.996,6.68-6.68V72.914z"/>
  </svg></a>

         
				<button className="bg-gray-700 text-white px-2 py-2 rounded-2xl hover:bg-gray-800" onClick={() => { navigate('/admin') }} >
				  MyPosts
				</button>
        

		</div>
				{/* Search Bar */}
				{/* <SearchBar
	// 					value={data.search}
	// 					onChange={(newValue) => setData({ search: newValue })}
	// 					onRequestSearch={() => goSearch()}
	// 				/> */}
        
		            <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch()}
					/>		

        {/* Navigation Links */}
        <nav className="flex space-x-4 items-center">
          <NavLink
						to="/register"
						 className="bg-gray-700 text-white px-2 py-2 rounded-2xl hover:bg-gray-800"
          >
            Register
          </NavLink>

          <NavLink
						to="/login"
						 className="bg-gray-700 text-white px-4 py-2 rounded-2xl hover:bg-gray-800"
          >
            Login
          </NavLink>

          <a onClick={() => { navigate('/logout') }} >
			
			   <svg
    fill="#000000"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 384.971 384.971"
    xmlSpace="preserve"
    className="w-6 h-6 ml-2" // Adjust size as needed
  >
    <g id="Sign_Out">
      <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
        C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
        C192.485,366.299,187.095,360.91,180.455,360.91z"/>
      <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
        c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
        c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
    </g>
  </svg>	  
		  </a>

         
        </nav>
      </div>
    </header>
  );	
}
