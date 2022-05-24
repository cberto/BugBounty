import React from 'react'
import { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import {DarkTheme} from './Themes';
import { Carousel } from 'react-carousel-minimal';
import styled from 'styled-components'
import Titlte from '../subComponents/Titlte';
import bugbountyarg from "../assets/Images/BB_Arg.png"

const CarouselPhoto = styled.div`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

`

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`


const MainContainer = styled.div`
background-image: url(${bugbountyarg});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vm;
height: 100vh;
`

function Photos() {
  const data = [
    {
      image: "https://pbs.twimg.com/media/FPgvoLsXEAMItx8?format=jpg&name=large",
    },
    {
      image: "https://pbs.twimg.com/media/FPgvZw1WYAIvdVH?format=jpg&name=large",
    },
    {
      image: "https://pbs.twimg.com/media/FPgvgYuX0A4n-sE?format=jpg&name=large",
    },
    {
      image: "https://pbs.twimg.com/media/FPgvgZGWUAg2R1_?format=jpg&name=large",
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <ThemeProvider theme={DarkTheme}>
<MainContainer>
      <Box>
      <PowerButton />
      
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
    <CarouselPhoto
    
    >
        <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
</CarouselPhoto>

<Titlte text="FOTOS" top="80%" right="30%" />
</Box>
    </MainContainer>
    </ThemeProvider>
  )
}

export default Photos