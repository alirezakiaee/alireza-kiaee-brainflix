import './VideoListCard.scss'


//video listing constructor
const VideoListCard = ({ videoData, handleClick }) => {

    return (
        <article className="video-list-card" onClick={handleClick}>
            <img className="video-list-card__image" src={videoData.image} alt={videoData.title} />
            <div className="video-list-card__text-wrapper">
                <p className="video-list-card__title">
                    {videoData.title}
                </p>
                <p className="video-list-card__creator">
                    {videoData.channel}
                </p>
            </div>
        </article>
    )
}

export default VideoListCard