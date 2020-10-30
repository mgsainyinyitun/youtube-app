import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect }) =>{
    const rendered_list = videos.map((video) =>{
        return <VideoItem video={video} onVideoSelect={onVideoSelect}
        key = {video.id.videoId} />
    });

    return(
        <div className="ui relaxed divided list">
            {rendered_list}
        </div>
    );
}

export default VideoList;