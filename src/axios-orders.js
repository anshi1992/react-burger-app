import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-50e8c.firebaseio.com/'
});

export default instance;