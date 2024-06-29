import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Plans from './components/Plans';
import Program from './components/Program';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>

    </div>
  );
}

export default App;
