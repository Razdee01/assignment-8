import React from 'react';

const AllApps = ({app}) => {
    const { image,  ratingAvg, downloads, title } = app;
    
    return (
      <>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105 duration-300 mb-4">
          <figure>
            <img className="w-20 h-20" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
              <button className="flex items-center bg-[#F1F5E8] text-[#00D390] p-2 rounded-xl">
                <img
                  className="w-5 mr-1"
                  src="../assets/icon-downloads.png"
                  alt=""
                />
                {downloads}
              </button>
              <button className="flex items-center bg-[#F1F5E8] text-[#FF8811] p-2 rounded-xl">
                <img
                  className="w-5 mr-1"
                  src="../assets/icon-ratings.png"
                  alt=""
                />
                {ratingAvg}
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default AllApps;