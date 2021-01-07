import React from 'react'
import Card from './Card'



const Cards =()=> {
    return (
        <section style={{margin : '3em 0'}}>
            
            <h1 className='ui header centered' style={{fontSize:'4em', color:'#202726'}} id='services'>My Services</h1>
            
            <div className="ui four doubling stackable cards">
                <Card 
                    image='mern.jpg'
                    title='Web Development'
                    alt='Web Development'
                    desc='Developing websites with modern languages'
                />
                <Card 
                    image='o365.jpg'
                    title='Office 365'
                    alt='Office 365'
                    desc='transfer your office work to the next level of proffciency with Office 365'
                />
                <Card 
                    image='Odoo.jpg'
                    title='Odoo ERP'
                    alt='Odoo ERP'
                    desc='implementing Odoo ERP System'
                />
                <Card 
                    image='it.jpg'
                    title='IT Support'
                    alt='IT Support'
                    desc='Full IT end-user Support'
                />
                
            </div>
        </section>
    ) 
}   
    

export default Cards
