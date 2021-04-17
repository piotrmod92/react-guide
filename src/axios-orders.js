import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6ff05-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;