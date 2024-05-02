import './App.css';
import About from './About';
import Contact from './Contact';
import { BrowserRouter,Routes, Route,  } from "react-router-dom";
import Header from './Header';
import Projects from './Projects';
import Info from './Info';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
