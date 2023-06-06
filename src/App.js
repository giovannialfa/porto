import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Certs from './components/Certs';
import Footer from './components/Footer';
import Project from './components/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Giovanni Alfadiansyah';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36"style={{ backgroundColor:"#11100f" }}>
      <Navbar />
      <Hiro />
      <Skills />
      <Project/>
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
