import React from "react";
import AllApps from "../component/AllApps";
import useApps from "../customHook/useApps";

const Apps = () => {
  const { apps, loading, error } = useApps();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="text-center mt-8 w-11/12 mx-auto">
        <div>
          <h2 className="font-bold text-3xl">Our All Applications</h2>
          <p className="text-sm font-light">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h2>apps found</h2>
          </div>
          <div>
            <button>search</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apps.map((app) => (
            <AllApps key={app.id} app={app} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Apps;
