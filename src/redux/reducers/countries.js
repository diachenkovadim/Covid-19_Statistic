const initialState = {
    activeCountry: null,
    countries: [],
    visibleModalWindow: false, 
}

const countries = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COUNTRIES': {
            return {
                ...state,
                countries: action.payload,
            }
        }
        case 'SHOW_MODAL_WINDOW': {
            return {
                ...state,
                visibleModalWindow: action.payload
            }
        }
        case 'SET_ACTIVE_COUNTRY': {
            return {
                ...state,
                activeCountry: action.payload
            }
        }
    default:
            return state
    }
    
}

export default countries