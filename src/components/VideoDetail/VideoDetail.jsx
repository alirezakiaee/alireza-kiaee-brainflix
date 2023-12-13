import ViewIcon from '../../assets/icons/Icon-views.svg'
import LikeIcon from '../../assets/icons/Icon-likes.svg'

import './VideoDetail.scss'

const dateConvertor = (timestamp) => {

    const fullDate = new Date(timestamp)
    const year = fullDate.getFullYear()
    const month = ("0" + (fullDate.getMonth() + 1)).slice(-2)
    const day = ("0" + fullDate.getDate()).slice(-2)
    const pastDate = `${month}/${day}/${year}`

    //convert to days
    const today = new Date()

    const pastMonth = Number(pastDate.slice(0, 2)) - 1
    const pastDay = Number(pastDate.slice(3, 5))
    const pastYear = Number(pastDate.slice(6, 10))
    const past = new Date(pastYear, pastMonth, pastDay)

    //calculate millisecond to day difference
    let difference = today.getTime() - past.getTime()
    difference = difference / (24 * 60 * 60 * 1000)

    if (difference < 31) {
        return `${parseInt(difference)} days ago`
    } else if (difference < 365) {
        return `${parseInt(difference / 30)} months ago`
    } else if (difference > 365) {
        return `${parseInt(difference / 365)} years ago`
    }

}
//video's info block
const VideoDetail = ({ selected }) => {
    return (
        <section className="video-detail">
            <h1 className="video-detail__title">
                {selected.title}
            </h1>
            <article className="video-detail__detail">
                <div className="video-detail__subtitle">
                    <h2 className="video-detail__creator">
                        By {selected.channel}
                    </h2>
                    <p className="video-detail__date">
                        {dateConvertor(selected.timestamp)}
                    </p>
                </div>
                <div className="video-detail__stats-wrapper">
                    <img className="video-detail__view-icon" src={ViewIcon} alt="view icon" />
                    <p className="video-detail__view-num">
                        {selected.views}
                    </p>
                    <img className="video-detail__like-icon" src={LikeIcon} alt="view icon" />
                    <p className="video-detail__like-num">
                        {selected.likes}
                    </p>
                </div>
            </article>
            <p className="video-detail__text">
                {selected.description}
            </p>
        </section>
    )
}

export default VideoDetail