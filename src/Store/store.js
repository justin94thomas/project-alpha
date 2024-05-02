import { createStore } from 'redux';
import Projects from '../Pages/Dashboard/projects.json';

const initialState = {
    dashboardProjects: Projects.Content,
    showProjects: []
}

function lowerCaseString(string) {
    return string.toLowerCase();
}
function handleState(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_PROJECT':
            const searchTerm = action.payload.toLowerCase();
            const filteredProjects = state.dashboardProjects.filter(project =>
                lowerCaseString(project?.Name).includes(searchTerm)
            );
            return { ...state, showProjects: filteredProjects };
        default:
            return state;
    }
}

const store = createStore(handleState);

export default store;