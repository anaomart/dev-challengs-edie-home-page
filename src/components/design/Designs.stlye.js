import styled from "styled-components";



export const DesignStyled = styled.div `
   & >div { padding: 5vw 0;
    display:grid;
    grid-template-columns:repeat(auto-fill ,minmax(450px,1fr));
    row-gap:15rem;
    place-items:start;
}

    a {
        color:#2D9CDB;
        font-weight: 500;
font-size: 2.4rem;
line-height: 3.6rem;
text-align: right;
width: 100wv;
text-decoration: none;    }
    
`

export const ImageCard = styled.div `
    transform:translateY(${({id})=>id %2 != 0 ?'180px' : '0'});
        @media(max-width:768px) {
            transform:translateY(0);

        }
    img {
        width:56rem;
        border-radius: 1.2rem;
    }
    p{
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: #828282;
        margin:0.5rem;
    }
    span {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: #333333;
        padding:2rem 0;
    }
  `