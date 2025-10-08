import React, { useState } from "react";
import AllApps from "../component/AllApps";
import useApps from "../customHook/useApps";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
const term=search.trim().toLowerCase()
const searchedApps=term?apps.filter(app=>app.title.toLowerCase().includes(term)):apps
console.log(searchedApps);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className="text-center mt-8 w-11/12 mx-auto">
        <div>
          <h2 className="font-bold text-3xl">Our All Applications</h2>
          <p className="text-sm font-light">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center my-3">
          <div>
            <h2 className="font-semibold">{`(${searchedApps.length}) Apps Found`}</h2>
          </div>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AllApps key={app.id} app={app} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Apps;
