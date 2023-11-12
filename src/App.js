// App.js
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* <BrowserRouter>
      <Router> */}
      <div>
        <Navbar />
        <Body>
          {/* <Route path="/workshop" component={Workshop} /> */}
          <HeroSection />
          <Wrapper>
            <Skills />
            <Projects />
          </Wrapper>
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        </div>
      {/* </Router>
      </BrowserRouter> */}
    </ThemeProvider>

  );
}

export default App;


// // App.js for route:

// import React, { useState } from "react";
// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from './utils/Themes.js';
// import Navbar from "./components/Navbar";
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";
// import styled from "styled-components";
// import Workshop from "./components/Workshop"; // Make sure to import Workshop correctly

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
// `

// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
// `

// function App() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [openModal, setOpenModal] = useState({ state: false, project: null });

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Router>
//         <Navbar />
//         <Body>
//           <HeroSection />
//           <Wrapper>
//             <Switch>
//               <Route path="/skills" component={Skills} />
//               <Route path="/experience" component={Experience} />
//               <Route path="/projects" component={Projects} />
//               <Route path="/workshop" component={Workshop} />
//               <Route path="/education" component={Education} />
//             </Switch>
//           </Wrapper>
//           <Footer />
//           {openModal.state && (
//             <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
//           )}
//         </Body>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


//App.js
// import React, { useState } from "react";
// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from './utils/Themes.js';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import the necessary components
// import styled from "styled-components";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";
// import Workshop from "./components/Workshop"; // Import the Workshop component

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
// `

// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `

// function App() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [openModal, setOpenModal] = useState({ state: false, project: null });

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Router>
//         <Navbar />
//         <Body>
//           <HeroSection />
//           <Wrapper>
//             <Skills />
//             <Experience />
//           </Wrapper>
//           <Switch>
//             <Route path="/workshop" component={Workshop} /> {/* Create a route for Workshop */}
//           </Switch>
//           <Projects openModal={openModal} setOpenModal={setOpenModal} />
//           <Wrapper>
//             <Education />
//             <Contact />
//           </Wrapper>
//           <Footer />
//           {openModal.state && (
//             <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
//           )}
//         </Body>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


    