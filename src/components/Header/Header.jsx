import React from 'react'
import './Header.scss'
import SearchComponent from '../SearchComponent/SearchComponent'
import logoSvg from '../../images/logo.svg'

const Header = ({ onChange }) => {
    return (
      
      <header>
        <div className="flex-box-header">
          <div className="header-logo">
              <div>
                  <div><img src={logoSvg} alt="covid logo" /></div>
                  <div><h1>STATISTIC</h1></div>            
              </div>    
          </div>
          <SearchComponent 
            onChange={onChange}
          />
        </div>    
      </header>
    )
}

export default Header