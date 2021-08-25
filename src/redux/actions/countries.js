import axios from 'axios'

export const showModalWindow = (param) => ({
    type: 'SHOW_MODAL_WINDOW',
    payload: param
})

export const fetchCountries = () => dispatch => {
    axios.get('https://api.covid19api.com/summary')
      .then(({ data }) => dispatch(setCountries(data.Countries)))
}

export const setCountries = (countries) => ({
    type: 'SET_COUNTRIES',
    payload: countries
})

export const setActiveCountry = (index) => ({
    type: 'SET_ACTIVE_COUNTRY',
    payload: index
})

