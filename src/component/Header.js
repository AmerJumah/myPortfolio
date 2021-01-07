import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

class Header extends Component {
    render() {
        return (
            <div className='ui primary stackable pointing menu'>
               <Link to='/' className='sub header item' >
                Amer Jumah
               </Link> 
               <div className='right menu'>
                    <Link to='/info' className='item'> My Information </Link>
                    <Link to='/education' className='item'> Education & Courses </Link>
                    <Link to='/experience' className='item'> Experience </Link>
                    <Link to='/skills' className='item'> Skills </Link>
                    <GoogleAuth className='item' />
               </div>
            </div>
        )
    }
}

export default Header
