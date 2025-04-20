import React from 'react';

function Explores() {
  return (
    <div className=" p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Explore</h1>
      <div className="shaddow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-[#272727] p-4 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Trending</h2>
          <p>Watch what's popular right now</p>
        </div>
        <div className="bg-[#272727] p-4 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Music</h2>
          <p>Listen to the hottest tracks</p>
        </div>
        <div className="bg-[#272727] p-4 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Gaming</h2>
          <p>Discover top gaming videos</p>
        </div>
        <div className="bg-[#272727] p-4 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">News</h2>
          <p>Stay updated with the latest news</p>
        </div>
      </div>
    </div>
  );
}

export default Explores;
