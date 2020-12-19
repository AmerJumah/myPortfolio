import React from 'react'

const Card = props => {
    console.log(props);
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.img} alt='services'/>
            </div>
            <div className="content">
                <div className="header">{props.title}</div>
                <div className="meta">
                    <div>{props.content}</div>
                </div>
            </div>
        </div>
    )
}

export default Card
