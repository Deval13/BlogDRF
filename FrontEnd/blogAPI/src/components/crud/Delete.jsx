// import React, { useState, useEffect } from 'react';
// // import axiosInstance from '../../axios';
// import { axiosInstance } from '../../axois';
// import {useParams , useNavigate } from 'react-router-dom';
// //MaterialUI
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';

// export function Delete() {
// 	const history = useNavigate();
// 	const { id } = useParams();

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		axiosInstance
// 			.delete('admin/delete/' + id + "/")
// 			.catch(function (error) {
// 				if (error.response) {
// 					console.log(error.response.data);
// 					console.log(error.response.status);
// 					console.log(error.response.headers);
// 				}
// 			})
// 			.then(function () {
// 					history({
// 						pathname: '/admin/',
// 					});
// 					window.location.reload();
// 			});
// 	};

// 	return (
//  <div className=" flex justify-center bg-gray-100">
//             <div className="bg-white  rounded-lg shadow-md max-w-sm m-4 ">
//                 <button
//                     className=" py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//                     type="button" // Use "button" to prevent default form submission
//                     onClick={handleSubmit}
//                 >
//                     Press here to confirm delete
//                 </button>
//             </div>
//         </div>
// 	);
// }

import React, { useState } from 'react';
import { axiosInstance } from '../../axois';
import { useParams, useNavigate } from 'react-router-dom';
// Material-UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
  },
}));

export function Delete() {
  const classes = useStyles();
  const history = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history('/admin'); 
  };

  
  const handleDelete = (e) => {
    e.preventDefault();
    axiosInstance
      .delete('admin/delete/' + id + '/')
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      .then(function () {
        history('/admin/');
        window.location.reload();
      });
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm m-4">
        <button
          className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          type="button"
          onClick={handleOpen} // Open modal on button click
        >
          Press here to confirm delete
        </button>

        {open && (
          <div className="fixed  bg-gray-800 flex items-center justify-center z-3">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full">
              <h2 className="text-lg ">
                Are you sure you want to delete this item?
              </h2>
              <div className="flex justify-between">
                <button
                  className="py-2 px-4 bg-red-500 text-white rounded-lg "
                  onClick={handleDelete} 
                >
                  Yes, Delete
                </button>
                <button
                  className="py-2 px-4 bg-gray-500 text-white rounded-lg "
                  onClick={handleClose} 
                >
                  No, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
