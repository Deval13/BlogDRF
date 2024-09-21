// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function PostCard({props}) {
  return (
    <div className="max-w-sm bg-white  border border-gray-500 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
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
        
        <Link
          to={'posts/' + props.slug}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-700 rounded-lg hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-grey-700 dark:hover:bg-grey-800 dark:focus:ring-grey-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
