import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About_Us from "./pages/About_Us/About_Us";
import Services from "./pages/Services/Services";
import Contact_Us from "./pages/Contact_Us/Contact_Us";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About_Us />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact_Us />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
