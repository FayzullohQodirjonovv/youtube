import React from 'react';
import Nodir from '../../assets/nodir.svg';
import Nodir2 from '../../assets/nodir2.svg';
import Nodir3 from '../../assets/nodir3.svg';

function Subscriptions() {
  return (
    <div className="textl p-4 text-white ml-[300px]">
      <h1 className="text-3xl font-bold mb-4">Your Subscriptions</h1>
      <ul className="mb-6 flex justify-between w-[1000px] mt-[100px]">
        <li className="flex items-center mb-4">
          <img src={Nodir} alt="Nadir On The Go" className="w-10 h-10 rounded-full mr-4"/>
          <div>
            <span className="text-lg font-semibold">Nadir On The Go</span>
            <p className="text-sm text-[#AAAAAA]">Kundalik vloglar va sayohat videolari.</p>
          </div>
        </li>
        <li className="flex items-center mb-4">
          <img src={Nodir2} alt="Coke Studio" className="w-10 h-10 rounded-full mr-4"/>
          <div>
            <span className="text-lg font-semibold">Coke Studio Bangla</span>
            <p className="text-sm text-[#AAAAAA]">Musika va ijodiy videolar.</p>
          </div>
        </li>
        <li className="flex items-center mb-4">
          <img src={Nodir3} alt="MKBHD" className="w-10 h-10 rounded-full mr-4"/>
          <div>
            <span className="text-lg font-semibold">MKBHD</span>
            <p className="text-sm text-[#AAAAAA]">Texnologiya va gadget sharhlari.</p>
          </div>
        </li>
      </ul>

      <div className="text-xl mt-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Videos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Video ko'rsatish */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-[#272727] rounded-xl overflow-hidden">
              <video src={`/short${item}.mp4`} controls className="w-full object-cover rounded-lg"/>
              <div className="p-2 text-white">
                <h3 className="text-lg font-semibold">Short Video #{item}</h3>
                <p className="text-sm text-[#AAAAAA]">Qisqa, lekin qiziqarli video.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
