import styled from "styled-components";




export const StyledQuote = styled.div `
    q {
        display: inline-block;
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 5.4rem;
        color: #333333;
        width: 40ch;
        padding:2rem 0 ;
    }
    div {
        display:flex;
        gap:2rem;
    }
    img {
        width: 72px;
        border-radius:1rem;
    } 
    p {
        font-weight: 500;
font-size: 2.4rem;
line-height: 3.6rem;
color: #333333;
}
span {
        display: inline-block;
        font-weight: 500;
font-size: 1.8rem;
line-height: 2.7rem;
color: #828282;
    }
    @media (max-width : 768px) {
        q {
            font-size: 2.4rem;
        }
    }

`