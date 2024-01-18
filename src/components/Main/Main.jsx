import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoDetail from '../VideoDetail/VideoDetail';
import Comment from '../Comment/Comment';
import VideoList from '../VideoList/VideoList';
import axios from 'axios';
import './Main.scss';


const Main = () => {
    const [videoData, setVideoData] = useState([]);
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const API_URL = process.env.REACT_APP_API_URL
    const ENDPOINT = process.env.REACT_APP_ENDPOINT

    useEffect(() => {
        axios.get(`${API_URL}/${ENDPOINT}`)
            .then(response => {
                setVideoData(response.data);
                // Set the default video
                const defaultVideoId = id || response.data[0]?.id;
                console.log(`${API_URL}/${ENDPOINT}/${defaultVideoId}`)
                return axios.get(`${API_URL}/${ENDPOINT}/${defaultVideoId}`);
            })
            .then(response => {
                setSelected(response.data);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError(err);
            });
    }, [id, API_URL, ENDPOINT]);

    const handleClick = (videoId) => {
        setSelected(videoData.find(video => video.id === videoId));
    };

    if (error) {
        return <div>Error loading data</div>;
    }

    if (!selected) {
        return <div>Loading...</div>;
    }

    return (
        <main className="main">
            <section className="main__hero">
                <VideoPlayer videoData={selected} />
            </section>
            <section className="main__body">
                <div className="main__body-left">
                    <VideoDetail selected={selected} />
                    <Comment selected={selected} />
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
