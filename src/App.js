
import './App.css';
import About from './components/About';
import PicCarousel from './components/PicCarousel';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Quote from './components/Quote';
import HeroBanner from './components/HeroBanner';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <About/>
      <Grid/>
      <PicCarousel/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App;
