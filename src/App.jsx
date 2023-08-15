import NavbarCom from "./components/NavbarCom"
import Hero from "./components/Hero"
import Galeri from "./components/Galeri"
import Services from "./components/Services"
import Question from "./components/Question"
import Footer from "./components/Footer"
import 'animate.css';



function App() {
  return(
    <div>
      <Hero />
     <NavbarCom />
      <Galeri />
      <Services />
      <Question />
      <Footer /> 
    </div>
  )
}

export default App
