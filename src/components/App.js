import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from "axios";
import { async } from 'regenerator-runtime';

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (termFromSearchBar) => {
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${termFromSearchBar}&key=AIzaSyDeDa9p6rsAePy5ska2RwFpcHAu0hnfRB0`);
    setVideos(response.data.items);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div style={{ marginTop: '1em' }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div>
        <VideoDetail video={selectedVideo} />
      </div>
      <div>
        <VideoList handleVideoSelect={handleVideoSelect}
          videos={videos}
        />
      </div>
    </div>
  );
};


