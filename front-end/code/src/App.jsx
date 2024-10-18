import Home from './components/Home';
import Nav from './components/Nav/Nav';
// import Adds from './components/Adds';
import {Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Recipe_details from './components/Recipe/Recipe_details';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
      <main className="min-h-screen px-40 flex flex-col justify-between gap-20">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Recipe/:id" element={<Recipe_details />} />
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;