import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import './hero.css'



const Hero = () => {
    return (
        <div className='hero' >
            
            <h1 className='ui header grey inverted dividing' id='fonts'>Welcome to my Portfolio</h1>
            <div>
                <img src="images/myFace.jpeg" class="ui small circular image" alt='my face'/>
            </div>
            <h1 className="ui header grey inverted">               
                Amer Abdulahad Jumah
            </h1>
            


            <div>
                <a href='https://www.facebook.com/AMR14jumah' rel="noopener" target="_blank" class="ui circular facebook icon button">
                    <i class="facebook icon"></i>
                </a>
                <a target="_blank" rel="noopener" href='https://twitter.com/Amer_Rozi' class="ui circular twitter icon button">
                    <i class="twitter icon"></i>
                </a>
                <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/amer-rozi-151830108/' class="ui circular linkedin icon button">
                    <i class="linkedin icon"></i>
                </a>
                <a target="_blank" rel="noopener" href="mailto: amr.jumah@gmail" class="ui circular google plus icon button">
                    <i class="google plus icon"></i>
                </a>
            </div>

            <div style={{maxWidth:'70%', margin:'2em 0', fontWeight:'100', backgroundColor : '#c5e3f6', padding:'.6em 2em', color:'#202726'}}>      
                Stay relevant in a rapidly evolving digital world.
            </div> 

            <Link smooth to='#contact' class="huge ui button" style={{margin:'1.5em 0'}}>
                Contact me
            </Link>
        </div>
    )
}

export default Hero
