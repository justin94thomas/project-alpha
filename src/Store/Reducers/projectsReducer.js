import { PROJECT_DATA, SEARCH_PROJECT } from "../Actions/type";

const initialState = {
    dashboardProjects: null
}

function lowerCaseString(string) {
    return string.toLowerCase();
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_DATA:
            return { ...state, dashboardProjects: action.payload }
        case SEARCH_PROJECT:
            const searchTerm = action.payload.toLowerCase();
            const filteredProjects = state.dashboardProjects.filter(project =>
                lowerCaseString(project?.Name).includes(searchTerm)
            );
            return { ...state, showProjects: filteredProjects };
        default:
            return state;
    }
};


export default projectsReducer;