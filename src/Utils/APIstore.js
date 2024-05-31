import axios from 'axios';
import { apiBaseURL } from './constants';

export const getDashboardProjects = async () => {
    const path = 'dashboard/getProjects';
    const res = await axios.get(`${apiBaseURL}/${path}`);
    return res && res.data ? res.data : null;
};


export const getBlockbusterMovies = async () => {
    const path = 'blockbuster/getMovies';
    const res = await axios.get(`${apiBaseURL}/${path}`);
    return res && res.data ? res.data : null;
}

export const getBlockbusterSeats = async () => {
    const path = 'blockbuster/getSeats';
    const res = await axios.get(`${apiBaseURL}/${path}`);
    return res && res.data ? res.data : null;
}

