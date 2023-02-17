import React from 'react'
import Container from '../styles/Container.style'
import heroImage from '../../edie-homepage-master/heroImage.jpg'
import { HeroStyled } from './Hero.style'
export default function Hero() {
  return (
        <HeroStyled>
            <div>
            <a href='/' alt='unhappy'>Unhappy with your website?</a>
            <h1>We create beautiful <br/>
            and fast web services</h1>

            </div>
            <img src={heroImage} alt='Hero' />
        <div>
            <h2>Story, emotion <br/> and purpose</h2>
            <p>
            We help transform your ideas into real world 
            applications that will outperform your toughest competition
            and help you achieve your strategic goals in short period of time.
            </p>
            <span>
            Want us to contact you?
            </span>
            <div>
                <input type="text" placeholder='Email'/>
                <button type="button">Join</button>
            </div>
            </div>
        </HeroStyled>
  )
}
