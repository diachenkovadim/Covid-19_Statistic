import React from 'react'
import './Button.scss'

const Button = ({onClick}) =>  {
    return (
      <div className="ok-button"
        onClick={onClick}
      >  
        <button>Ok</button>
      </div>
    )
}

export default Button


