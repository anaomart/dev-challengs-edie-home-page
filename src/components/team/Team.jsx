import React, { Component } from 'react'
import { SectionContainer } from '../styles/Container.style'
import { TeamStyled } from './Team.stlye'
import { HeadText } from '../services/Services.style'
import personOne from '../../edie-homepage-master/person1.png'
import personTwo from '../../edie-homepage-master/person2.png'
import personThree from '../../edie-homepage-master/person3.png'
export default class Team extends Component {
    render() {
        return (
            <SectionContainer>
                <TeamStyled>
                    <div>
                        <span>Meet the team</span>
                        <HeadText> We are chilled <br/>and a laidback <br/> team</HeadText>
                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div>

                    <div className='images'>

                        <div>
                            <img src={personThree} alt='personThree' />
                        </div>
                        <div>
                            <img src={personTwo} alt='personTwo' />
                            <img src={personOne} alt='personOne' />
                        </div>
                    </div>


                </TeamStyled>
            </SectionContainer>
        )
    }
}
