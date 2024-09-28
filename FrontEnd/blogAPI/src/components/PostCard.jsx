// import { useEffect } from "react";
import { axiosInstance } from "../axois";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function PostCard({ props }) {
  const [userid , setUsersId] = useState('')
   const navigator = useNavigate()
    const setUserId = useEffect(() => {
        axiosInstance.get('admin/getid').then((res) => {
            setUsersId(res.data[0].id)
            console.log(res.data)
        })
    } , [])

    console.log("user is " + userid);

  return (
    <div className="max-w-sm bg-white  border border-gray-500 rounded-lg shadow dark:border-gray-700">
      <div>
        <a href="#">
        <img 
          className="rounded-t-lg"
          src={props.image}
          alt="image"
        />
      </a>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-200 dark:text-black">
            {props.title.substring(0, 10)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-black-400">
           {props.content.substring(0, 10)}
        </p>
        {console.log(props.slug)}
        
        <div className="flex flex-row justify-between">
          <Link
          to={'posts/' + props.slug}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-grey-700 dark:hover:bg-grey-800 dark:focus:ring-grey-800"
        >
          Read more
          </Link>
          <div>
            {props.author}
          </div>
          {
            console.log("same user are " + props.author + " = " + userid)
          }

          {
            props.author == userid ? <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-grey-700 dark:hover:bg-grey-800 dark:focus:ring-grey-800" onClick={() => {
                 navigator('/admin/edit/' + userid)
            }}>Update</div> : <></>
          }

        </div>
      </div>
    </div>
  );
}
