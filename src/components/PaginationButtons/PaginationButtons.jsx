import React from 'react'
import './PaginationButton.scss'

const PaginationButton = ({ totalPosts, postPerPage, activePage, changePage }) => {

    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className={activePage === number ? 'page-item active-page' : 'page-item default'}>
              <a
                href={`#${number}`}
                className='page-link'
                onClick={() => changePage(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default PaginationButton