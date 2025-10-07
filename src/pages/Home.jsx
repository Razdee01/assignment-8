import React from "react";
import { Link } from "react-router";
import useApps from "../customHook/useApps";
import HomeApps from "../component/HomeApps";

const Home = () => {
  const { apps, loading, error } = useApps();
  const homePage = apps.slice(0, 8);
  return (
    <>
      <div className="text-center my-3">
        <h1 className="text-4xl font-bold">
          We Build <br />
          <span
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text 
            text-transparent
            "
          >
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] mt-2 p-3">
          At PhStore, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br /> Our goal is to turn your ideas into digital experiences that
          truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-2 m-3">
          <Link to={"https://play.google.com/store/games?hl=en"}>
            <div className="flex justify-center items-center gap-2 btn">
              <img src="../assets/Group1.png" alt="gg" />
              <span>Google Play</span>
            </div>
          </Link>
          <Link to={"https://www.apple.com/app-store/"}>
            <div className="flex justify-center items-center gap-2 btn">
              <img src="../assets/Group2.png" alt="gg" />
              <span>App Store</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center px-3">
          <img src="../assets/hero.png" alt="" />
        </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-10">
          <h2 className="text-2xl font-bold mb-4">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div>
              <p className="text-sm">Total Downloads</p>
              <p className="text-4xl font-bold">29.6M</p>
              <p className="text-sm">21% more than last month</p>
            </div>
            <div>
              <p className="text-sm">Total Reviews</p>
              <p className="text-4xl font-bold">906K</p>
              <p className="text-sm">46% more than last month</p>
            </div>
            <div>
              <p className="text-sm">Active Apps</p>
              <p className="text-4xl font-bold">132+</p>
              <p className="text-sm">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="text-center my-8 space-y-2">
        <h2 className="text-4xl font-bold">Trending Apps</h2>
        <p className="text-[#627382] text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="w-11/12 mx-auto mb-3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {homePage.map((app) => (
          <HomeApps key={app.id} app={app}></HomeApps>
        ))}
      </div>
      <Link to={"/apps"}>
        <div className="flex justify-center items-center">
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white 
           p-2 px-6  mb-5 mt-2">
            Show All
          </button>
        </div>
      </Link>
    </>
  );
};

export default Home;
