import React from 'react'
import Header from '../../components/header'
import SearchBar from './Searchbar.js'
import youtube from './youtube_api.js'
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'

class Youtube extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar,
            },
        })
        this.setState({
            videos: response.data.items,
        })
    }
    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <>
                <Header page="home" />
                <div className="ui container" style={{ marginTop: '1em' }}>
                    <SearchBar handleFormSubmit={this.handleSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList
                                    handleVideoSelect={this.handleVideoSelect}
                                    videos={this.state.videos}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Youtube
