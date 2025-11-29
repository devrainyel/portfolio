import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Projects } from './pages/projects/Projects';
import { Contact } from './pages/contact/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
