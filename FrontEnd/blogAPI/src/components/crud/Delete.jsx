import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axios';
import { axiosInstance } from '../../axois';
import {useParams , useNavigate } from 'react-router-dom';
//MaterialUI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export function Delete() {
	const history = useNavigate();
	const { id } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete('admin/delete/' + id)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history({
						pathname: '/admin/',
					});
					window.location.reload();
			});
	};

	return (
 <div className=" flex justify-center bg-gray-100">
            <div className="bg-white  rounded-lg shadow-md max-w-sm m-4 ">
                <button	
                    className=" py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="button" // Use "button" to prevent default form submission
                    onClick={handleSubmit}
                >
                    Press here to confirm delete
                </button>
            </div>
        </div>
	);
}