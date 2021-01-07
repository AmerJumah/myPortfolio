import React from 'react'
//import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import './footer.css'

const Footer = () => {
    return (
    <div className="ui inverted vertical footer bottom segment" id='foot'>
        <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                    <h4 className="ui inverted header">About</h4>
                    <div className="ui inverted link list">
                        <HashLink smooth to='/#contact' className="item">Contact me</HashLink>
                        <HashLink smooth to="/#services" className="item">My services</HashLink>
                        <HashLink smooth to="/info" className="item">More about me</HashLink>
                        {/*<Link smooth to="#experience" className="item">My Experience</Link>
                        <Link smooth to="#skills" className="item">My skills</Link> */}
                    </div>
                </div>
                <div className="three wide column">
                    <h4 className="ui inverted header">Services</h4>
                    <div className="ui inverted link list">
                        <HashLink smooth to="#services" className="item">Web Development</HashLink>
                        <HashLink smooth to="#services" className="item">Office 365</HashLink>
                        <HashLink smooth to="#services" className="item">Odoo ERP system</HashLink>
                        <HashLink smooth to="#services" className="item">IT Support</HashLink>
                    </div>
                </div>
                <div className="seven wide column">
                <h4 className="ui inverted header">Amer Jumah</h4>
                <p></p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Footer
