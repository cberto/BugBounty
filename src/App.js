import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import  GlobalStyle  from "./globalStyles"
import { Route, Routes } from "react-router";
import Main from "./components/Main";
import About from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPages from "./components/WorkPages";
import MySkillsPage from "./components/MySkillsPage";


function App() {
  return <>


<GlobalStyle />

<ThemeProvider theme={lightTheme}>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<WorkPages />} />
        <Route path="/skill" element={<MySkillsPage />} />

        
      </Routes>

</ThemeProvider>
    
    </>
    
}

export default App

