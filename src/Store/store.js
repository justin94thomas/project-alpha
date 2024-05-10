import { createStore } from 'redux';

const initialState = {
    dashboardProjects: [],
    showProjects: []
}

function lowerCaseString(string) {
    return string.toLowerCase();
}
function handleState(state = initialState, action) {
    switch (action.type) {
        case 'PROJECT_DATA':
            return { ...state, dashboardProjects: action.payload }
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