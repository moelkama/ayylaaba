import Home from './components/Home';
import Nav from './components/Nav';
// import Adds from './components/Adds';
import {Routes, Route} from "react-router-dom"

// import MyComponent from './components/tst';
function App() {
  return (
      <main className="px-8 flex flex-col gap-20">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receipt" element={<h1>This is Recipes page.</h1>} />
        </Routes>
      </main>
  );
}

export default App;