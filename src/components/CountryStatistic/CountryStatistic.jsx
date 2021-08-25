import React from 'react'
import './CountryStatistic.scss'
import ModalWindow from '../ModalWindow/ModalWindow'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries, showModalWindow, setActiveCountry } from '../../redux/actions/countries'
import PaginationButton from '../PaginationButtons/PaginationButtons'
import { selectPaginationPage } from '../../redux/actions/pagination'

const CountryStatistic = () => {
    const dispatch = useDispatch()

    const items = useSelector(({ countries }) => countries.countries)
    const filter = useSelector(({ filterCountry }) => filterCountry)

    const visibleModal = useSelector(({ countries }) => countries.visibleModalWindow)
    const activeCountry = useSelector(({ countries }) => countries.activeCountry)

    const showModalHandler = (index) => {
        dispatch(showModalWindow(!visibleModal))
        dispatch(setActiveCountry(index))
    }

    const currentPage = useSelector(({ pagination }) => pagination.currentPage)
    const postPerPage = useSelector(({ pagination }) => pagination.countriesPerPage)
    const totalPosts = useSelector(({ countries }) => countries.countries.length)
    const activePage = useSelector(({ pagination }) => pagination.activePage)  

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost).filter(post => post.Country.toLowerCase().includes(filter.toLowerCase()))

    const onChangePageHandler = (pageNumber) => {
        dispatch(selectPaginationPage(pageNumber))
    }

    React.useEffect(() => {
        dispatch(fetchCountries())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <section>
            <div className="flex-box-table-header">
                <div>№</div>
                <div>Country</div>
                <div>Total Confirmed</div>
            </div>
            {currentPosts.length === 0 ? <p className='noReults'>Not found</p>
            :  currentPosts.map((country, index) => {
                return (
                    <div
                      key={country.ID}
                      className="flex-box-country-statistic"
                      onClick={() => showModalHandler(index)}
                     >
                        <div>{index + 1}</div>
                        <div>{country.Country}</div>
                        <div>{country.TotalConfirmed}</div>
                    </div>
                )
            })
            }
           

            {visibleModal ? 
            <ModalWindow
              onClick={showModalHandler}
              active={visibleModal}
              countryStatistic={currentPosts}
              activeCountry={activeCountry}
              />
               : null}

            <PaginationButton 
              totalPosts={totalPosts}
              postPerPage={postPerPage}
              activePage={activePage}
              changePage={onChangePageHandler}
            />     
        </section>
    )
}

export default CountryStatistic