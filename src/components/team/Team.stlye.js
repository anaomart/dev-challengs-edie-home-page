import styled from "styled-components";

export const TeamStyled = styled.div `
  display: flex;
    justify-content: space-between;
    align-items:center;
    span {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #eb5757;
    margin:1rem;
    
  }

  p {
    font-weight: 400;
font-size: 1.6rem;
line-height: 2.4rem;
color: #4F4F4F;
margin: 1rem 0 ;
  }

 .images {

    display: flex;
    div:first-of-type {
        display: flex;
        flex-direction: column;
        margin:auto;
    }    div:last-of-type {
        display: flex;
        flex-direction: column;
    }

 }
 img {
    padding:0 1rem;
    border-radius: 2.4rem;
 }
@media (max-width: 768px) {
    flex-direction: column;
}

`;