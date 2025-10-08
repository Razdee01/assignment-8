import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen gap-5">
          <img src="../assets/error-404.png" alt="" />
          <h1 className="font-bold text-3xl">Oops, page not found!</h1>
          <p className="text-sm text-[#627382] ">
            The page you are looking for is not available.
          </p>
          <Link to={"/"}>
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-md">
              Go Back
            </button>
          </Link>
        </div>
      </>
    );
};

export default Error;