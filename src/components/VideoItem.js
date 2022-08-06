import React from "react";

const VideoItem = (props) => {
    return (
        <div onClick={() => props.handleVideoSelect(props.video)}
            className="video-item">
            <img className="ui-image"
                src={props.video.snippet.thumbnails.medium.url}
                alt={props.video.snippet.description}
            />
            <div className="header">{props.video.snippet.title}</div>
        </div>

    );
};

export default VideoItem;