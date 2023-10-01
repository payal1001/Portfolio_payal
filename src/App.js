import Navbar from "./components/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contacts from "./components/Contacts/contacts";
import Footer from "./components/footer/footer";
function App() {
  return (
    < div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
       <Works/>
       <Contacts/>
<Footer/>
    </div>
  );
}

export default App;