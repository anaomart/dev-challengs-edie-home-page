import styled from 'styled-components'


const Flex = styled.div `
  display:flex;
  flex-direction:${({direction})=> direction || 'row'};
  justify-content:space-between;
  align-items:center;
  `

export default Flex