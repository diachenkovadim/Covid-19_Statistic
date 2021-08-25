
const initialState = {
    currentPage: 1,
    activePage: 1,
    numbersOfPages: null,
    countriesPerPage: 10, 
}

const pagination = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_PAGINATION_PAGE': {
            return {
                ...state,
                currentPage: action.payload,
                activePage: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default pagination