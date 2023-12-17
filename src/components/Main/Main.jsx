// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import VideoPlayer from '../VideoPlayer/VideoPlayer';
// import VideoDetail from '../VideoDetail/VideoDetail';
// import Comment from '../Comment/Comment';
// import VideoList from '../VideoList/VideoList';
// import Dataset from '../../data/video-details.json';
// import axios from 'axios';


// import './Main.scss';

// const Main = () => {
//     const [videoData, setVideoData] = useState(Dataset);
//     const [selected, setSelected] = useState(null);
//     const { id } = useParams();
// //API here


//     useEffect(() => {
//         const findVideoById = (id) => videoData.find(video => video.id === id);

//         if (id) {
//             setSelected(findVideoById(id));
//         } else {
//             setSelected(videoData[0]);
//         }
//     }, [id, videoData]);

//     const handleClick = (id) => {
//         setSelected(videoData.find(video => video.id === id));
//     };

//     return (
//         <main className="main">
//             <section className="main__hero">
//                 {selected && <VideoPlayer videoData={selected} />}
//             </section>
//             <section className="main__body">
//                 <div className="main__body-left">
//                     {selected && (
//                         <>
//                             <VideoDetail selected={selected} />
//                             <Comment selected={selected} />
//                         </>
//                     )}
//                 </div>
//                 <div className="main__body-right">
//                     <VideoList
//                         videoData={videoData}
//                         selected={selected}
//                         handleClick={handleClick}
//                     />
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Main;
////////////////////////////////////////////////////////////////////

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
    const { id } = useParams();
    const API_URL = "https://project-2-api.herokuapp.com";
    const API_KEY = "85fec6e8-bb03-4e4c-ba10-2e96931855fd";

    useEffect(() => {
        axios
            .get(`${API_URL}/videos/?api_key=${API_KEY}`)
            .then(response => {
                setVideoData(response.data);
                const defaultVideo = response.data[0].id
                if (!id) {
                    return axios.get(`${API_URL}/videos/${defaultVideo}?api_key=${API_KEY}`)
                } else  {
                     
                    return axios.get(`${API_URL}/videos/${id}?api_key=${API_KEY}`)
                }
            })
            .then((response) => {
                setSelected(response.data);
                })
                
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    const handleClick = (id) => {
        setSelected(videoData.find(video => video.id === id));
    };
    if (!selected && !videoData) {
        return null
    }
    console.log(selected);
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
