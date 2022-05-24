
import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import Card from '../subComponents/Card';
import Titlte from '../subComponents/Titlte';

import { Data } from "../data/PagesData";


const Box = styled.div`
background-color: ${props => props.theme.body};

height:400vh;
position: relative;
display: flex;
align-items: center;


`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`


const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}


export const Pages = () => {
  const ref = useRef(null);
  const bb = useRef(null);



  useEffect(() => {
      let element = ref.current;
     
      
      const rotate = () => {
       
       element.style.transform = `translateX(${-window.pageYOffset}px)`
    
       
        return (bb.current.style.transform =
          'rotate(' + -window.pageYOffset + 'deg)')
      }
  
      window.addEventListener('scroll', rotate)
      return () => {
        window.removeEventListener('scroll', rotate);
        
      }
    }, [])
  return (
    <ThemeProvider theme={DarkTheme}> 
    <Box> 
    <LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<Main ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Data.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
     <Titlte text="PAGES" top='10%' right="20%" />
    </Box>
    </ThemeProvider>
  )
}
export default Pages