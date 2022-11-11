import axios from 'axios'
const KEY = 'AIzaSyD2JBOSpXjcdfd1uqaPhmMOP7SvpCe7qUQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
})
