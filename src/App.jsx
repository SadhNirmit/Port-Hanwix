import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import css from './styles/app.module.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<><Header /> <Hero />  <Experties /> <Work /> <Portfolio /> <People /> <Footer /> </>} />
       <Route path="/about" element={<><Header /> <Footer /> </>} />
       <Route path="/services" element={<><Header /> <Experties /> <Footer /></>} />
       <Route path="/portfolio" element={<><Header /> <Work /> <Footer /></>} />
       <Route path="/testimonils" element={<><Header /> <Portfolio /> <People /> <Footer /></>} />
     </Routes>
     </BrowserRouter>

     {/* <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
      <Footer /> */}

  </div>;
};

export default App;
