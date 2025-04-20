import React from 'react';

function Shorts() {
  return (
    <div className="textl p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">YouTube Shorts</h1>
      <p className="mb-6">Qisqa, qiziqarli va trenddagi videolarni tomosha qiling!</p>

      <div className="salomro grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-[#272727] rounded-xl p-3 aspect-[9/16]">
        <div key={item} className="bg-[#272727] rounded-xl overflow-hidden aspect-[9/16]">
  <video
    src={`/short${item}.mp4`}
    controls
    autoPlay
    muted
    loop
    className="w-full h-full object-cover rounded-lg"
  />
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;
