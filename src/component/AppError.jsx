import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router';
import Footer from './Footer';

const AppError = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
       

        <div className="flex-1">
          <div className="flex flex-col justify-center items-center h-screen gap-5">
            <img src="https://i.ibb.co.com/b5F4v8mJ/OBJECTS.png" alt="" />
            <h1 className="font-bold text-3xl">OPPS!! APP NOT FOUND</h1>
            <p className="text-sm text-[#627382] ">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <Link to={"/"}>
              <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-md">
                Go Back
              </button>
            </Link>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default AppError;