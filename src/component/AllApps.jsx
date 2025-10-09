import React from 'react';
import { Link } from 'react-router';

const AllApps = ({app}) => {
    const { image, ratingAvg, downloads, title, id } = app;
    const average =
      ratingAvg.reduce((sum, r, i) => sum + (i + 1) * r.count, 0) /
      ratingAvg.reduce((sum, r) => sum + r.count, 0);

    
    
    return (
      <>
        <Link to={`/details/${id}`}>
          <div className="card bg-base-100 shadow-sm p-3 hover:scale-105 duration-300 mb-4">
            <figure>
              <img
                className="w-20 h-20 object-contain"
                src={image}
                alt={title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <div className="card-actions justify-between">
                <button className="flex items-center bg-[#F1F5E8] text-[#00D390] p-2 rounded-xl">
                  <img
                    className="w-5 mr-1"
                    src="https://i.ibb.co.com/8gwxxgTV/fi-9131795.png"
                    alt=""
                  />
                  {downloads}
                </button>
                <button className="flex items-center bg-[#F1F5E8] text-[#FF8811] p-2 rounded-xl">
                  <img
                    className="w-5 mr-1"
                    src="https://i.ibb.co.com/RnBMDvM/fi-1828884.png"
                    alt=""
                  />
                  {average.toFixed(1)}
                </button>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
};

export default AllApps;