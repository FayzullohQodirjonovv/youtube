import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://67e5756718194932a58626bd.mockapi.io/todo/todo')
      .then(res => {
        console.log(res.data); 
        setVideos(res.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading videos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error.message}</div>;
  }

  return (
    <div className="nameds grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {videos.map(video => (
        <div key={video.id} className="p-2">
          {video.image && (
            <img
              src={video.image}
              alt={video.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
          )}
          <h2 className="text-lg font-bold mb-1 text-[white]">{video.name}</h2>
          <p className="text-[#AAAAAA]">{video.text}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
