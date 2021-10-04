import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <>  
    <Navbar/>
    <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type:"circle",
          stroke: {
            width: 6,
            color:"#89CFF0"
          }
        }
      }
    }}
    />
    <Header/>
    <AboutMe/>
    <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type:"square",
          stroke: {
            width: 5,
            color:"#89CFF0"
          }
        }
      }
    }}
    />
    <Skills/>
    <Experience/>
    <Education/>
    <ContactMe/>
    <Footer/>
    </>
  );
}

export default App;
