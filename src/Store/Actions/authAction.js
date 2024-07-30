// Example action creators

import { PROJECT_DATA, SEARCH_PROJECT } from "./type";

export const setProjectData = (projects) => ({
    type: PROJECT_DATA,
    payload: projects
});

export const searchProjects = (searchTerm) => ({
    type: SEARCH_PROJECT,
    payload: searchTerm
});
