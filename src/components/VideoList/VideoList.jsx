import React from 'react';
import VideoListCard from '../VideoListCard/VideoListCard';
import { Link } from 'react-router-dom';
import './VideoList.scss';

const VideoList = ({ videoData, selected, handleClick }) => {
    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {videoData
                .filter(video => video.id !== selected?.id)
                .map(video => (
                    <Link to={`/video/${video.id}`} key={video.id}>
                        <VideoListCard
                            videoData={video}
                            handleClick={() => handleClick(video.id)} />
                    </Link>
                ))
            }
        </section>
    );
}

export default VideoList;
