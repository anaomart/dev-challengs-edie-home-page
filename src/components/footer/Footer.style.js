import styled from "styled-components";

export const StyledFooter = styled.footer `
background: #100E1D;
padding: 5vw 10vw;
display:flex;
justify-content: space-between;
@media(max-width:768px) {
    flex-direction: column;
    align-items: space-between;
    gap:5rem;
}
  ul {
    align-items: start;
    list-style: none;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 200%;
    color: #ffffff;
    * {
        color:white;
        text-decoration: none;
    }
   
  }
  h2 {
    font-family: "Heebo", sans-serif;
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 5.3rem;
    color: #F2F2F2;
  }
  img {
    padding-right:1rem ;
  }
  input {

width: 25rem;
height: 4rem;
padding:1rem;
background: #F2F2F2;
border-radius: 0.5rem;
border:none;
outline:none;
}
button {
outline:none;
border:none;
background: #2D9CDB;
padding: 0.8rem 1.8rem;
color:white;
border-radius: 0.7rem;
height:3.5rem;
transform: translateX(-6.3rem);
}
p{
    color:white;
}
`;