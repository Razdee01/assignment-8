import React from 'react';
import { Link } from 'react-router';

const HomeApps = ({ app }) => {
    const { image, ratingAvg, downloads, title,id } = app;
    const average =
      ratingAvg.reduce((sum, r, i) => sum + (i + 1) * r.count, 0) /
      ratingAvg.reduce((sum, r) => sum + r.count, 0);
  return (
    <Link to={`/details/${id}`}>
      <div className="card bg-base-100 shadow-sm p-3 hover:scale-105 duration-300">
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
                alt="rating icon"
              />
               {average.toFixed(1)}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeApps;