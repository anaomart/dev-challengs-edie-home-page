import React from 'react'
import  { SectionContainer } from '../styles/Container.style'
import { Card, HeadText, StyledServices } from './Services.style'
import penImage from '../../edie-homepage-master/juice-product.png'
export default function Services() {
  return (
    <SectionContainer>
        <StyledServices>
        <HeadText>We offer high <br/> demand services  </HeadText>
        <div>
            
        <Card >
            <div style={{background:'#2D9CDB'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
               </svg>
            </div>
            <h2>
            UI/UX Design
            </h2>
            <p>
            Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Duis a<br/> metus ac nulla consequat aliquet<br/> id quis turpis.</p>
            <button>
                Get Started
            </button>
        </Card>
        <Card>
            <div  style={{background:'#27AE60'}} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            </div>
            <h2>
            UI/UX Design
            </h2>
            <p>
            Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Duis a<br/> metus ac nulla consequat aliquet<br/> id quis turpis.</p>
            <button>
                Get Started
            </button>
        </Card>
        <Card>
            <div style={{background:' #EB5757'}} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
            </div>
            <h2>
            UI/UX Design
            </h2>
            <p>
            Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Duis a<br/> metus ac nulla consequat aliquet<br/> id quis turpis.</p>
            <button>
                Get Started
            </button>
        </Card>
        </div>
        </StyledServices>
    </SectionContainer>
  )
}
