import styled from "styled-components"


export const StyledServices = styled.div `
    & > div {
        margin-left: 5rem;
        display:grid;
    grid-template-columns: repeat(auto-fit ,minmax(300px ,1fr));
    justify-content: center;

    }
    @media(max-width:768px) {
    }


`

export const Card = styled.div `

div {
border-radius: 16px;
width: 67px;
display:flex;
justify-content:center;
align-items:center;
padding:2rem 1rem;
margin:2rem 0;
}
svg {
    width: 27px;
}
h2 {

    font-family: "Poppins", sans-serif;
font-style: normal;
font-weight: 700;
font-size: 2.54rem;
line-height: 3.6rem;
color: #333333;

}
p {
    font-family: "Poppins", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 2.4rem;
color: #4F4F4F;
margin:2rem 0 ;
}
button {

    padding: 2.1rem 5.15rem;
    background: #E0E0E0;
    border-radius: 12px;
    border:none;
    outline: none;
    margin:1rem 0 ;
    font-family: "Poppins", sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.6rem;
line-height: 2.4rem;
transition: all 0.3s;


color: #828282;
&:hover {
    color:white;
    background-color: #2D9CDB;

}

}



`








export const HeadText = styled.h2 `

    
    font-family: 'Poppins', sans-serif;
 
font-weight: 500;
font-size: 3.6rem;
line-height: 5.4rem;
color: #333333;
    
`