import React from "react";
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import "../src/Assets/styles/index.css"

// Imported header and Footer which are displayed at all times
const App = () => {
  return (
    <div>
      <Header />
      <div>
      <Footer />
    </div>
    </div>
  )
}

export default App;
