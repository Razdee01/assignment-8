import React, { useEffect, useState } from "react";
import Loading from "../component/Loading";

const Installation = () => {
  const [list, setList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);
  



  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("list"));
    if (savedList) {
      setList(savedList);
    }
    setLoading(false); 
  }, []);
  if (loading) return <Loading></Loading>;

  const convertDownloads = (str) => {
    if (!str) return 0;
    const num = parseFloat(str);
    if (str.includes("B")) return num * 1_000_000_000;
    if (str.includes("M")) return num * 1_000_000;
    if (str.includes("K")) return num * 1_000;
    return num;
  };

  const sortedApps = () => {
    if (sortOrder === "asc") {
      return [...list].sort(
        (a, b) => convertDownloads(a.downloads) - convertDownloads(b.downloads)
      );
    } else if (sortOrder === "desc") {
      return [...list].sort(
        (a, b) => convertDownloads(b.downloads) - convertDownloads(a.downloads)
      );
    } else {
      return list;
    }
  };

  const handleRemove = (id) => {
    const existing = JSON.parse(localStorage.getItem("list"));
    let updatedList = existing.filter((p) => p.id !== id);
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  if (list.length === 0) {
    return (
      <div className="mt-5 w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold">No Apps Installed</h2>
        <p className="text-sm font-light">
          You have not installed any apps yet.
        </p>
      </div>
    );
  }
 


  return (
    <>
      <div className="mt-5 w-11/12 mx-auto">
        <div className="text-center space-y-2 mb-4">
          <h2 className="text-3xl font-bold">Your Installed Apps</h2>
          <p className="text-sm font-light">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="text-center flex justify-between items-center font-semibold mb-4">
          <p>{`${list.length} Apps Found`}</p>
          <label className="form-control md:w-full max-w-xs font-semibold">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Downloads</option>
              <option value="asc">Low To High</option>
              <option value="desc">High To Low</option>
            </select>
          </label>
        </div>

        <div className="space-y-4">
          {sortedApps().map((p) => {
            
            const average =
              p.ratingAvg.reduce((sum, r, i) => sum + (i + 1) * r.count, 0) /
              p.ratingAvg.reduce((sum, r) => sum + r.count, 0);

            return (
              <div
                key={p.id}
                className="card card-side bg-base-100 shadow-sm p-3"
              >
                <figure>
                  <img
                    className="w-20 h-20 object-contain"
                    src={p.image}
                    alt={p.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.title}</h2>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-light">
                      <img
                        className="w-5 h-5"
                        src="https://i.ibb.co.com/8gwxxgTV/fi-9131795.png"
                        alt=""
                      />
                      <p className="text-[#00D390]">{p.downloads}</p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <img
                        className="w-5 h-5"
                        src="https://i.ibb.co.com/RnBMDvM/fi-1828884.png"
                        alt=""
                      />
                      <p className="text-sm font-normal">
                        {average.toFixed(1)}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-normal">{`${p.size} MB`}</p>
                    </div>
                  </div>

                  <div className="card-actions md:justify-end">
                    <button
                      onClick={() => handleRemove(p.id)}
                      className="btn bg-[#00D390] text-white mt-3 hover:bg-[#00b87f]"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Installation;
