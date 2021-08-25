const initialState = ''

const filterCountry = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_COUNTRY': {
           return action.payload
        }
        default: {
            return state
        } 
    }  
}

export default filterCountry