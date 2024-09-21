import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Footer from './components/Layout/Footer';
import Header from "./components/Layout/Header";
import SearchPage from './components/SearchPage';
import BecomeHost from './components/BecomeHost';
import { Modal } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/become-a-host" element={<BecomeHost />} />
        </Routes>

        {/* Modal rendering */}
        {isModalOpen && (
          <Modal open={isModalOpen} onClose={closeModalHandler}>
            {/* Modal content */}
            <div>
              <h2>Modal Title</h2>
              <p>Modal content goes here.</p>
              <button onClick={closeModalHandler}>Close</button>
            </div>
          </Modal>
        )}
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;


