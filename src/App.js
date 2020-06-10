import React from 'react';
import {
  Header,
  Footer,
} from "./shared/components";
import './App.css';
import {MainPage} from "./pages/MainPage";

function App() {
  return (
    <div className="NetflixApp">
      <Header/>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
