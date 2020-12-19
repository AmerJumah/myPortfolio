import React from 'react'
import Card from './Card'
import './home.css'


const Cards =()=> {
    return (
        <div className="__cards ui link cards">
            <Card
                img = "/images/it.jpg" 
                title = "IT Support"
                content = "More than 10 years experience in full end-user support"
            /> 
            <Card
                img = "/images/mern.jpg" 
                title = "Web Developer"
                content = "Developing your website with most modern and powerfull programming Languages"
            /> 
            <Card
                img = "/images/o365.jpg" 
                title = "Mcrosoft Office 365 Expert"
                content = "Implementing Exchange Sharepoint OneDrive Teams to enhance your business"
            /> 
            <Card
                img = "/images/Odoo.jpg" 
                title = "Odoo Expert"
                content = "Implementing all you need to get started Odoo ERP system"
            /> 
            
        </div>
    ) 
}   
    

export default Cards
