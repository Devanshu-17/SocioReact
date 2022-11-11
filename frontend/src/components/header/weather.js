import './App.css'
import CreatePost from '../../components/createPost'
import Header from '../../components/header'
import LeftHome from '../../components/home/left'
import RightHome from '../../components/home/right'
import SendVerification from '../../components/home/sendVerification'
import Stories from '../../components/home/stories'
import Post from '../../components/post'
import WeatherApp from './WeatherApp'

function Weather() {
    return (
        <>
            <Header page="home" />
            <WeatherApp />
        </>
    )
}

export default Weather
