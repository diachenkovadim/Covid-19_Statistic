import React from 'react'
import './SearchComponent.scss'
import { filter } from '../../redux/actions/filter'
import { useDispatch } from 'react-redux'

const SearchComponent = () => {
  const dispatch = useDispatch()
  const onChangeHandler = (value) => dispatch(filter(value))
  
    return (
      <div className="header-search">
        <input
          type="text"
          name="search"
          placeholder="Search..." 
          onChange={event => onChangeHandler(event.target.value)}
          />
      </div>
    )
}

export default SearchComponent