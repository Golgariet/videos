import axios from 'axios';


const KEY = 'AIzaSyCvkuIJVkX7sM81JQdwmTcNtdT0ou08F2U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});