import React, { useState } from "react";
import AllApps from "../component/AllApps";
import useApps from "../customHook/useApps";
import Loading from "../component/Loading";
import "react-toastify/dist/ReactToastify.css";
const Apps = () => {
  const { apps, loading} = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  if (loading) return <Loading></Loading>;

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
                onChange={(e) => {
                  setSearchLoading(true);
                  setSearch(e.target.value);
                  setTimeout(() => setSearchLoading(false), 200);
                }}
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchLoading ? (
            <div className="col-span-full flex justify-center items-center h-40">
              <Loading />
            </div>
          ) : searchedApps.length > 0 ? (
            searchedApps.map((app) => <AllApps key={app.id} app={app} />)
          ) : (
            <div className="col-span-full text-center mt-10 text-gray-500">
              No apps found matching your search.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Apps;
