import styled from "styled-components";

export const StyledNav = styled.nav `
  h2 {
    font-family: "Heebo", sans-serif;
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 5.3rem;

  }
  ul {
    gap: 50px;
    @media (min-width:768px){
        display:flex;
    }
    display:none;
  }
  span {
    font-size:4rem;
    cursor: pointer;
    @media (min-width:768px){
        display:none;
    }
  }

  li {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.6rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
`;

export const MobileNavbar = styled.nav `
display:none;
transition:  1s;
@media (max-width:768px) {
    display:block;
    background-color:black;
    nav {
        
        height: 90vh;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        
    }
 
}


`