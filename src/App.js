import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBanner from './component/MainBanner';
import { createContext } from "react";
import BannerSection from "./component/BannerSection";
const LangContext = createContext("en");

function App() {
  return (
    
    //<BrowserRouter>
    //    <div className="App">
    //    <Routes>
    //      <Route path="/" element={<BannerSection/>} />
    //    </Routes>
    //    </div>
    // </BrowserRouter>

    <div className="App">
      <BannerSection/>
    </div>

  )
}

export default App;
