import React from "react";

const VideoDetail = (props) => {
    const video = props.video;

    if (!video) {
        return <h4>Search Results</h4>
    }

    const videoSrc = 'https://www.youtube.com/embed/${video.id.videoId}';
    // console.log(typeof (video));

    return (
        <div>
            <div>
                <iframe src={videoSrc}
                    allowFullScreen
                    title="Video Player"
                />
            </div>
            <div>
                <h4 className="ui-header">Title: {video.snippet.title}</h4>
                <p className="description">Description: {video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;