import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import {DarkTheme} from './Themes';
import hacker from '../assets/Images/man3.png'
import Titlte from '../subComponents/Titlte';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Hacker = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`



export const About = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />

  <Hacker>
            <img src={hacker} alt="spaceman" />
        </Hacker>    
        <Main>
        Comunidad creada por amantes de la seguridad informática y el hacking, dedicada a brindar un espacio donde podamos enseñar y aprender sobre el mundo del Bug Bounty. Un espacio donde podamos compartir un buen momento entre amigos.
        </Main>

        <Titlte text="ABOUT" top="10%" left="5%" />
</Box>

    </ThemeProvider>
  )
}
export default About