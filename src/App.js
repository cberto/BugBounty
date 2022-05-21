import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import  GlobalStyle  from "./globalStyles"
import { Route, Routes } from "react-router";
import Main from "./components/Main";
import About from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Pages from "./components/Pages";
import Photos from "./components/Photos";


function App() {
  return <>


<GlobalStyle />

<ThemeProvider theme={lightTheme}>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/photos" element={<Photos />} />

        
      </Routes>

</ThemeProvider>
    
    </>
    
}

export default App

