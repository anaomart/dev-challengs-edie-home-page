import React from 'react'
import { StyledFooter } from './Footer.style'
import { Nav } from '../navbar/Navbar'
import instagram from '../../edie-homepage-master/instagram.svg'
import linkdin from '../../edie-homepage-master/linkedin.svg'
import twitter from '../../edie-homepage-master/twitter.svg'

export default function Footer() {
  return (
  <>
  <StyledFooter>
        <div>
            <Nav direction={'column'}/>
        </div>
        <div>
            <h2>Edie</h2>
            <div className='icons'>
                <img src={instagram} alt={instagram}/>
                <img src={linkdin} alt={instagram}/>
                <img src={twitter} alt={instagram}/>
            </div>
        </div>
        <div>
        <input type="text" placeholder='Email'/>
                <button type="button">Join</button>
        </div>

        
    </StyledFooter>
  
  
 
    
  </>
  
  
  )
}
