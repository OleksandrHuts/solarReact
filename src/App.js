import './styles/main.scss'
import { Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home';
import About from './pages/About';
import Default from './layouts/Default';
import Movie from './pages/Movie';

function App() {

  return (
    <div className="App page_wrapper">
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path='about/' element={<About />} />
          <Route path="movie/:id" element={<Movie/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
