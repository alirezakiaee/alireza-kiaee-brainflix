import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoDetail from '../VideoDetail/VideoDetail';
import Comment from '../Comment/Comment';
import VideoList from '../VideoList/VideoList';
import Dataset from '../../data/video-details.json';

import './Main.scss';

const Main = () => {
    const [videoData, setVideoData] = useState(Dataset);
    const [selected, setSelected] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const findVideoById = (id) => videoData.find(video => video.id === id);

        if (id) {
            setSelected(findVideoById(id));
        } else {
            setSelected(videoData[0]);
        }
    }, [id, videoData]);

    const handleClick = (id) => {
        setSelected(videoData.find(video => video.id === id));
    };

    return (
        <main className="main">
            <section className="main__hero">
                {selected && <VideoPlayer videoData={selected} />}
            </section>
            <section className="main__body">
                <div className="main__body-left">
                    {selected && (
                        <>
                            <VideoDetail selected={selected} />
                            <Comment selected={selected} />
                        </>
                    )}
                </div>
                <div className="main__body-right">
                    <VideoList
                        videoData={videoData}
                        selected={selected}
                        handleClick={handleClick}
                    />
                </div>
            </section>
        </main>
    );
};

export default Main;
