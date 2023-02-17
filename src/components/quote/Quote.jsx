import React from 'react'
import { SectionContainer } from '../styles/Container.style'
import { StyledQuote } from './Quote.stlye'
import avatar from '../../edie-homepage-master/person4.png'
export default function Quote() {
  return (
    <SectionContainer>
        <StyledQuote>
            <q>
            Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.   
            </q>
            <div>
            <img src={avatar}   alt="avatar" />
                <section>
                <p>Carlos Tran</p>
                <span>The Decorate Gatsby</span>
                </section>
            </div>
        </StyledQuote>      
    </SectionContainer>
  )
}
