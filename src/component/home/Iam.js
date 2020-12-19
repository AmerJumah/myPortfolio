import React from 'react'
import Typical from 'react-typical'
import './home.css'

const Iam = () => {
    return (
        <p className='iam-p'>
            I am a{' '}
            <Typical 
                loop={Infinity}
                wrapper="b"
                steps = {[
                    'developer',1000,
                    'technician',1000
                ]}
            />
        </p>
    )
}

export default Iam
