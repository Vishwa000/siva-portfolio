import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink
  // WhatsappButton
} from './NavbarStyledComponent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Link to='/' style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </Link>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleMobileMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems> 
      </NavbarContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => {
            setIsOpen(!isOpen);
          }}>About</MobileLink>
          <MobileLink href='#skills' onClick={() => {
            setIsOpen(!isOpen);
          }}>Skills</MobileLink>
          <MobileLink href='#experience' onClick={() => {
            setIsOpen(!isOpen);
          }}>Experience</MobileLink>
          <MobileLink href='#projects' onClick={() => {
            setIsOpen(!isOpen);
          }}>Projects</MobileLink>
          <MobileLink href='#education' onClick={() => {
            setIsOpen(!isOpen);
          }}>Education</MobileLink>
             <MobileLink href='#contact' onClick={() => {
            setIsOpen(!isOpen);
          }}>Contact</MobileLink>
        </MobileMenu>
      )};
    </Nav>
  );
};

export default Navbar;


// // For Route:
// import React from 'react';
// import { NavLink } from 'react-router-dom'; // Import NavLink
// import { useTheme } from 'styled-components';
// import { DiCssdeck } from 'react-icons/di';
// import { FaBars } from 'react-icons/fa';
// import { Bio } from '../../data/constants';
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   NavItems,
//   MobileIcon,
//   MobileMenu,
//   MobileLink,
//   GitHubButton,
//   ButtonContainer,
// } from './NavbarStyledComponent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();

//   const toggleMobileMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const buttonStyles = {
//     padding: '10px 16px',
//     background: theme.primary,
//     color: 'white',
//     width: 'max-content',
//   };

//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to="/">
//         <NavLink to="/" style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
//             <DiCssdeck size="3rem" /> Portfolio
//           </NavLink>
//         </NavLogo>
//         <MobileIcon>
//           <FaBars onClick={toggleMobileMenu} />
//         </MobileIcon>
//         <NavItems>
//           <NavLink exact to="/skills" activeClassName="active">Skills</NavLink>
//           <NavLink exact to="/experience" activeClassName="active">Experience</NavLink>
//           <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
//           <NavLink exact to="/workshop" activeClassName="active">Workshop</NavLink>
//           <NavLink exact to="/education" activeClassName="active">Education</NavLink>
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton href={Bio.github} target="_blank">
//             Github Profile
//           </GitHubButton>
//         </ButtonContainer>
//         {isOpen && (
//           <MobileMenu isOpen={isOpen}>
//             <MobileLink to="/about" onClick={toggleMobileMenu}>About</MobileLink>
//             <MobileLink to="/skills" onClick={toggleMobileMenu}>Skills</MobileLink>
//             <MobileLink to="/experience" onClick={toggleMobileMenu}>Experience</MobileLink>
//             <MobileLink to="/projects" onClick={toggleMobileMenu}>Projects</MobileLink>
//             <MobileLink to="/education" onClick={toggleMobileMenu}>Education</MobileLink>
//             <MobileLink to="/workshop" onClick={toggleMobileMenu}>Workshop</MobileLink>
//             <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
//           </MobileMenu>
//         )}
//       </NavbarContainer>
//     </Nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import {
// Nav,
// NavLink,
// NavbarContainer,
// Span,
// NavLogo,
// NavItems,
// GitHubButton,
// ButtonContainer,
// MobileIcon,
// MobileMenu,
// MobileLink,
// WhatsappButton
// } from './NavbarStyledComponent';
// import { DiCssdeck } from 'react-icons/di';
// import { FaBars } from 'react-icons/fa';
// import { Bio } from '../../data/constants';
// import { useTheme } from 'styled-components';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();

//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to='/'>
//           <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
//             <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
//           </a>
//         </NavLogo>
//         <MobileIcon>
//           <FaBars onClick={() => {
//             setIsOpen(!isOpen);
//           }} />
//         </MobileIcon>
//         <NavItems>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href='#skills'>Skills</NavLink>
//           <NavLink href='#experience'>Experience</NavLink>
//           <NavLink href='#projects'>Projects</NavLink>
//           <NavLink href='#education'>Education</NavLink>
//           <NavLink to='/workshop' onClick={() => {
//             setIsOpen(!isOpen);
//           }}>Workshop</NavLink> {/* Updated the Workshop Link */}
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
//         </ButtonContainer>
//         {isOpen && (
//           <MobileMenu isOpen={isOpen}>
//             <MobileLink href="#about" onClick={() => {
//               setIsOpen(!isOpen);
//             }}>About</MobileLink>
//             <MobileLink href='#skills' onClick={() => {
//               setIsOpen(!isOpen);
//             }}>Skills</MobileLink>
//             <MobileLink href='#experience' onClick={() => {
//               setIsOpen(!isOpen);
//             }}>Experience</MobileLink>
//             <MobileLink href='#projects' onClick={() => {
//               setIsOpen(!isOpen);
//             }}>Projects</MobileLink>
//             <MobileLink href='#education' onClick={() => {
//               setIsOpen(!isOpen);
//             }}>Education</MobileLink>
//             <MobileLink to='/workshop' onClick={() => {
//               setIsOpen(!isOpen);
//             }}>Workshop</MobileLink> {/* Updated the Workshop Link */}
//             <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
//           </MobileMenu>
//         )};
//       </NavbarContainer>
//     </Nav>
//   );
// }


// export default Navbar;

