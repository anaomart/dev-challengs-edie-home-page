import React, { useState } from 'react'
import Flex from '../styles/Flex'
import { MobileNavbar, StyledNav } from './Navbar.style'


export function Nav({as ,direction}) {
    return (
      <div>
              <Flex as={as || 'ul'} direction={direction  || 'row'}>
                  <li>
                      <a href='/' >Home</a>
                  </li>
                  <li>
                      <a href='/' >Services</a>
                  </li>
                  <li>
                      <a href='/' >Our Works </a>
                  </li>
                  <li>
                      <a href='/' > Clients</a>
                  </li>
                  <li>
                      <a href='/' >Contact</a>
                  </li>
              </Flex>
          </div>
    )
  }
  
export default function Navbar() {    
    const [isMobile , setIsMobile] = useState(false);
    
    



  return (
    <StyledNav>
        <Flex>
            <h2>Edie</h2>
                <Nav/>
                <span
                    onClick={()=> setIsMobile(!isMobile)}
                >&#9777;</span>
        </Flex>
               {isMobile && <MobileNavbar as='nav'>
                    <Nav as='nav' direction='column' />
                </MobileNavbar>}
    </StyledNav>
  )
}

