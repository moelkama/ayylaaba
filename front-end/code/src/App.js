import Home from './components/Home';
import Nav from './components/Nav/Nav';
// import Adds from './components/Adds';
import {Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

function App() {
  return (
      <main className="px-10 flex flex-col gap-20">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;