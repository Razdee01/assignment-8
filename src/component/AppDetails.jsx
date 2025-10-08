import React from 'react';
import { useParams } from 'react-router';
import useApps from '../customHook/useApps';

const AppDetails = () => {
    const {id}=useParams()
    const {apps,loading,error}=useApps()
    const app = apps.find((p) => String(p.id) === id);
    if(loading){
        return <p>loading..</p>
    }
    const {
      image,
      description,
      title,
      companyName,
      downloads,
      ratingAvg,
      reviews,
      size,
    } = app;
    
    return (
      <>
        <div className="w-11/12 mx-auto my-7">
          <div className="flex justify-center items-center">
            <div className="w-3/12">
              <img className="w-50 h-50" src={image} alt="" />
            </div>
            <div className="w-8/12">
              <div className="mb-3">
                <h2 className="font-bold text-3xl">{title}</h2>
                <p className="text-sm text-[#627382]">
                  Developed by{" "}
                  <span
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text 
            text-transparent"
                  >
                    {companyName}
                  </span>
                </p>
              </div>
              <div className="border-b-1 border-[#899097] mb-5"></div>
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-10"
                    src="../assets/icon-downloads.png"
                    alt=""
                  />
                  <p className="text-sm text-[#627382]">Downloads</p>
                  <p className="font-bold text-4xl text-[#001931]">
                    {downloads}
                  </p>
                </div>
                <div>
                  <img
                    className="w-10"
                    src="../assets/icon-ratings.png"
                    alt=""
                  />
                  <p className="text-sm text-[#627382]">Average Ratings</p>
                  <p className="font-bold text-4xl text-[#001931]">
                    {ratingAvg}
                  </p>
                </div>
                <div>
                  <img
                    className="w-10"
                    src="../assets/icon-review.png"
                    alt=""
                  />
                  <p className="text-sm text-[#627382]">Total Reviews</p>
                  <p className="font-bold text-4xl text-[#001931]">{reviews}</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-white bg-[#00D390] rounded-xl px-6 py-3">
                  {` Install Now (${size}MB)`}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t-1 border-[#899097] mt-5"></div>
          <div></div>
          <div>
            <h2 className="font-bold text-2xl">Description</h2>
            <p className="text-sm text-[#627382]">{description}</p>
          </div>
        </div>
      </>
    );
};

export default AppDetails;