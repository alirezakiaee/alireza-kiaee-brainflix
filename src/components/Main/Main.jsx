import { Component } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoDetail from '../VideoDetail/VideoDetail'
import Comment from '../Comment/Comment'
import VideoList from '../VideoList/VideoList'
import Dataset from '../../data/video-details.json'

import './Main.scss'


//main section of page
class Main extends Component {
    state = {
        videoData: Dataset,
        selected: Dataset[0]
    }

    handleClick = (id) => {
        const selected = this.state.videoData.find(video => video.id === id)
        this.setState({ selected: selected })
    }

    render() {
        return (
            <main className="main">
                <section className="main__hero">
                    <VideoPlayer
                        videoData={this.state.selected} />
                </section>
                <section className="main__body">
                    <div className="main__body-left">
                        <VideoDetail
                            selected={this.state.selected} />
                        <Comment
                            selected={this.state.selected} />
                    </div>
                    <div className="main__body-right">
                        <VideoList
                            videoData={this.state.videoData}
                            selected={this.state.selected}
                            handleClick={this.handleClick} />
                    </div>
                </section>
            </main>
        )
    }
}

export default Main