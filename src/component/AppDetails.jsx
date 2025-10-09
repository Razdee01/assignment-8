import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../customHook/useApps";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!id) return;
    const existing = JSON.parse(localStorage.getItem("list")) || [];
    const isInstalled = existing.some((a) => String(a.id) === String(id));
    if (isInstalled) setInstalled(true);
  }, [id]);
  //  ----- ✅ Handle loading and error states early
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading apps...</p>;
  // ------------------------------------------
  // if (!apps || apps.length === 0) return <p>No apps available</p>;
  const app = apps.find((p) => String(p.id) === id);
  // if (!app) return <p>App not found</p>;

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
  const average =
    ratingAvg.reduce((sum, r, i) => sum + (i + 1) * r.count, 0) /
    ratingAvg.reduce((sum, r) => sum + r.count, 0);

  const handleInstallation = () => {
    const existing = JSON.parse(localStorage.getItem("list"));
    let updatedList = [];
    if (existing) {
      updatedList = [...existing, app];
      const isDuplicate = existing.some((a) => a.id === app.id);
      if (isDuplicate) return;
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("list", JSON.stringify(updatedList));
    setInstalled(true);
  };

  return (
    <div className="w-11/12 mx-auto my-7">
      <div className="md:flex justify-center items-center">
        <div className="md:w-3/12 flex justify-center md:justify-normal">
          <img className="w-50 h-50" src={image} alt={title} />
        </div>

        <div className="md:w-8/12">
          <div className="mb-3">
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="text-sm text-[#627382]">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className="border-b-1 border-[#899097] mb-5"></div>

          <div className="flex justify-center md:justify-normal gap-4">
            <div>
              <img className="w-10" src="../assets/icon-downloads.png" alt="" />
              <p className="text-sm text-[#627382]">Downloads</p>
              <p className="font-bold text-4xl text-[#001931]">{downloads}</p>
            </div>

            <div>
              <img className="w-10" src="../assets/icon-ratings.png" alt="" />
              <p className="text-sm text-[#627382]">Average Ratings</p>
              <p className="font-bold text-4xl text-[#001931]">
                {average.toFixed(1)}
              </p>
            </div>

            <div>
              <img className="w-10" src="../assets/icon-review.png" alt="" />
              <p className="text-sm text-[#627382]">Total Reviews</p>
              <p className="font-bold text-4xl text-[#001931]">{reviews}</p>
            </div>
          </div>

          <div className="mt-3 text-center md:text-left">
            <button
              onClick={handleInstallation}
              disabled={installed}
              className={`rounded-xl px-6 py-3 transition ${
                installed
                  ? "bg-gray-400 text-white disabled"
                  : "bg-[#00D390] text-white hover:bg-[#00b87f]"
              }`}
            >
              {installed ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-1 border-[#899097] mt-5"></div>

      <div>
        <h2 className="font-bold text-2xl">Ratings</h2>
        <div className="bg-base-100 border rounded-xl p-4 h-90">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={apps[0].ratingAvg}
              margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
         
              <XAxis type="number" />
             
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#8884d8"
                barSize={30}
             
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-5">Description</h2>
        <p className="text-sm text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
