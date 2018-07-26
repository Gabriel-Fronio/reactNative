import axios from 'axios';

axios.defaults.baseURL = 'https://vjobs.herokuapp.com';

const getJobs = () => {
    return axios.get('/jobs').then(res => res.data).catch(err => console.error(err));
}

module.exports = {
    getJobs
}