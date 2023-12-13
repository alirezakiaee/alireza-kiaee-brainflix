import './VideoPlayer.scss'


//video hero player
const VideoPlayer = ({ videoData }) => {
    return (
        <div className="video-player__wrapper">
            <video className="video-player__player" poster={videoData.image} controls>
                <source src={videoData.video} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer