import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';

import Navbar from "./component/navbar/Navbar";
import Main from "./page/Main";
import About from "./page/About";
import Berths from "./page/Berths";
import Boats from "./page/Boats";
import Yachts from "./page/Yachts";
import Routers from "./page/Routers";
import Events from "./page/Events";
import Buffet from "./page/Buffet";
import Footer from "./component/footer/Footer";

import Boat from "./page/Boat";
import Yacht from "./page/Yacht";
import Event from "./page/Event";
import RouterSee from "./page/RouterSee";
import Berth from './page/Berth';

import {UrlClassMoreInfoContext} from "./context/index";

function App() {

  const url={
      boats:"/boats",
      yachts:"/yachts",
      routers:"/routers",
      eventsSee:"/events",
      berths:"/berths",
      buffet:"/buffet",
      about:"/about"
  }

  return (
    <div className="App">
        <UrlClassMoreInfoContext.Provider value={url}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path={url.berths} element={<Berths/>}/>
                    <Route path={url.berths+"/:id"} element={<Berth/>}/>
                    <Route path={url.boats} element={<Boats/>}/>
                    <Route path={url.boats+"/:id"} element={<Boat/>}/>
                    <Route path={url.yachts} element={<Yachts/>}/>
                    <Route path={url.yachts+"/:id"} element={<Yacht/>}/>
                    <Route path={url.routers} element={<Routers/>}/>
                    <Route path={url.routers+"/:id"} element={<RouterSee/>}/>
                    <Route path={url.eventsSee} element={<Events/>}/>
                    <Route path={url.eventsSee+"/:id"} element={<Event/>}/>
                    <Route path={url.buffet} element={<Buffet/>}/>
                    <Route path={url.about} element={<About/>}/>
                </Routes>
                <Footer/>
            </Router>
        </UrlClassMoreInfoContext.Provider>
    </div>
  );
}

export default App;
