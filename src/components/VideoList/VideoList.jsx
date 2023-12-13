import VideoListCard from '../VideoListCard/VideoListCard'

import './VideoList.scss'


//listing all video
const VideoList = ({ videoData, selected, handleClick }) => {

    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {videoData.map(video => {
                if (video !== selected) {
                    return <VideoListCard
                        key={video.id}
                        videoData={video}
                        handleClick={() => handleClick(video.id)} />
                } else {
                    return null
                }
            })}
        </section>
    )
}

export default VideoList