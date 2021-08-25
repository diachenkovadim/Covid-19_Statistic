import React from 'react'
import Button from '../Button/Button'
import './ModalWindow.scss'

const ModalWindow = ({ onClick, active, countryStatistic, activeCountry }) => {
    return (
        <div className={ active ? 'modal active' : 'modal' }
          onClick={onClick}
        >
            <div className="modal-content"
              onClick={event => event.stopPropagation()}
            >
                <p>{countryStatistic[activeCountry].Country}</p>
                <ul className="content-list">
                    <li>
                        <span>Total Confirmed</span>
                        <span>{countryStatistic[activeCountry].TotalConfirmed}</span>
                    </li>
                    <li>
                        <span>Total Deaths</span>
                        <span>{countryStatistic[activeCountry].TotalDeaths}</span>
                    </li>
                    <li>
                        <span>Total Recovered</span>   
                        <span>{countryStatistic[activeCountry].TotalRecovered}</span>
                    </li>
                </ul>
                <Button onClick={onClick}/>
                
            </div>
        </div>
    )
}

export default ModalWindow