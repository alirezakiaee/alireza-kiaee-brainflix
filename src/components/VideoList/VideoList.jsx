import VideoListCard from '../VideoListCard/VideoListCard'
import { Link } from "react-router-dom";
import './VideoList.scss'

const VideoList = ({ videoData, selected, handleClick }) => {
    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {videoData.map(video => {
                if (video !== selected) {
                    return (
                        <Link to={`/video/${video.id}`} key={video.id}>
                            <VideoListCard
                                videoData={video}
                                handleClick={() => handleClick(video.id)} />
                        </Link>
                    );
                } else {
                    return null;
                }
            })}
        </section>
    )
}

export default VideoList
