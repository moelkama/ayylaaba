import Home from './components/Home';
import Nav from './components/Nav/Nav';
// import Adds from './components/Adds';
import {Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Recipe_details from './components/Recipe/Recipe_details';
import NotFound from './components/NotFound';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
      <main className="px-40 flex flex-col gap-20">
        <SpeedInsights />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Recipe/:id" element={<Recipe_details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;