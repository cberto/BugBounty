import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import bugbountyarg from "../assets/Images/BB_Arg.png"
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'


const MainContainer = styled.div`
background-image: url(${bugbountyarg});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vm;
height: 100vh;
`
const Container = styled.div`

width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


export const BlogPage = () => {
  const [click] = useState(false);
  return (
    <MainContainer>
         <DarkDiv   click={click}/>
      <Container>
          <LogoComponent  theme={click ? 'light' :'dark'}  />
          <PowerButton />
          <SocialIcons theme={click ? 'light' :'dark'} />
      </Container>
    </MainContainer>
  )
}
export default BlogPage