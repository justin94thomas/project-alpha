import axios from 'axios';
import { apiBaseURL } from './constants';

export const getDashboardProjects = async () => {
    const path = 'dashboard/getProjects';
    const res = await axios.get(`${apiBaseURL}/${path}`);
    return res && res.data ? res.data : null;
};
