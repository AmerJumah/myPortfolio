import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
    return (
        <div>
           <h2>Thanks for contating me</h2>
           <p>We will be in touch soon </p>
           <Link  to="/" className="ui button primary" >Back</Link> 
        </div>
    )
}

export default Thanks