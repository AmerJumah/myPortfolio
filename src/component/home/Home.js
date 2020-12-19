import React from 'react'
import Cards from './Cards'
import Contact from './contact/Contact'
import Hero from './Hero'

const Home = () => {
    return (
        <>
           <Hero /> 
           <div className="ui hidden divider"></div>
           <Cards />
           <div className="ui hidden divider"></div>
           <Contact />

        </>
    )
}

export default Home
