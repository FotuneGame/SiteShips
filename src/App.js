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

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/berths" element={<Berths/>}/>
                <Route path="/boats" element={<Boats/>}/>
                <Route path="/boats/:id" element={<Boat/>}/>
                <Route path="/yachts" element={<Yachts/>}/>
                <Route path="/yachts/:id" element={<Yacht/>}/>
                <Route path="/routers" element={<Routers/>}/>
                <Route path="/routers/:id" element={<RouterSee/>}/>
                <Route path="/events/:id" element={<Event/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/buffet" element={<Buffet/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
