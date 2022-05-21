import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { BugBounty } from './AllSvgs'
import  { keyframes } from 'styled-components'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const Blog = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const PAGES = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const PHOTOS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const Center = styled.button`
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
img{
    border-radius: 200px 200px 200px 200px;
    max-width: 100%;
    max-height: 100%;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}

span{
    font-weight: bold;
    font-size: 1.5rem;

}
`
export const Main = () => {
  return (
    <MainContainer>
         <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Center>
            <BugBounty width={200} height={200} fill='currentColor' />
            <span> Click Here</span>
        </Center>
        
        <Contact target="_blank" to={{pathname:"mailto:asdasd@gmail.com"}}>
                <h2>Contactame</h2>
        </Contact>
        <Blog to="/blog">
                <h2>
                    Blog
                </h2>
        </Blog>

        <PAGES to="/pages">
                <h2>
                    Pages
                </h2>
        </PAGES>

        <BottomBar>
              <ABOUT to="/about">
                <h2>
                    About
                </h2>
        </ABOUT>
        <PHOTOS to="/photos">
                <h2>
                    Photos
                </h2>
        </PHOTOS>
        </BottomBar>
         </Container>

    </MainContainer>
  )
}
export default Main