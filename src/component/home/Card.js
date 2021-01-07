import React, {useState} from 'react'



const Card = props => {
const [isShown, setIsShown] =  useState(false)

    return (

        <div className="card" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
        <div className={`ui ${isShown ? 'active' : 'disabled'} inverted dimmer`}>
            <div style={{lineHeight:'25px', fontWeight:'bold'}}>{props.desc}</div>
        </div>
            <div className="image">
                <img src={`/images/${props.image}`} alt={props.alt}/>
            </div>
            
            
            <div className="content">
                <p className="header center aligned">{props.title}</p>
            </div>
            
        </div>
        
    )
}

export default Card
