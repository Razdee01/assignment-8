import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
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
        <div className="flex items-center justify-center">
          <img src="../assets/hero.png" alt="" />
        </div>
      </div>
    );
};

export default Home;