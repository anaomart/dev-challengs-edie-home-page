import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap');
 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
 }  
  html {font-size: 10px}
  @media (max-width: 768px) {
   html {font-size:8px}
  }
  @media (max-width: 500px) {
   html {font-size:6px}
  }

  img {max-width:100%}

  html{
   overflow-x:hidden;
  }
  @media (max-width: 768px) {
   root {
      font-size:12px;
   }
  }
  
  `



export default GlobalStyle