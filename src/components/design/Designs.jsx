import React from 'react'
import { SectionContainer } from '../styles/Container.style'
import { DesignStyled, ImageCard } from './Designs.stlye'
import { HeadText } from '../services/Services.style'
import booking from '../../edie-homepage-master/booking.png'
import juice from '../../edie-homepage-master/juice-product.png'
import onboard from '../../edie-homepage-master/onboard.png'
import dashboard from '../../edie-homepage-master/smarthome.jpg'
export default function Designs() {
  return (
    <div>
        <SectionContainer>
            <HeadText>Good design means<br/> good business</HeadText>
            <DesignStyled>
                <div>
                <ImageCard id='1'>
                    <img src={dashboard} alt='' />
                    <p >Full stack application</p>
                    <span>Smart home dashboard</span>
                </ImageCard>
                <ImageCard id='2' >
                    <img src={onboard} alt='' />
                    <p >UX/UI design</p>
                    <span>Onboard application</span>
                </ImageCard>
                <ImageCard id='3'>
                    <img src={booking} alt='' />
                    <p >Mobile application</p>
                    <span>Booking system</span>
                </ImageCard>
                <ImageCard id='4'>
                    <img src={juice} alt='' />
                    <p >Front End application on</p>
                    <span>Juice product homepage</span>
                </ImageCard>
                </div>
            <a href='/' > see more </a>
            </DesignStyled>
        </SectionContainer>


    </div>
  )
}
