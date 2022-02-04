import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Nav from './components/nav';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Recipieslist from './components/Recipieslist';
import Recipe from './components/Recipe';
import RouteTest from './components/RouteTest';
//import {recepes} from './components/recepes';
import Addreceipt from './components/Addreceipt';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'}></Route>
          <Route path={'/recipe'} element={<Recipieslist />}></Route>
          <Route path={'/recipe/:recipeid'} element={<Recipe />}></Route>
          <Route path={'/aboutus'} element={<Aboutus />}></Route>
          <Route path={'/aboutus/:info'} element={<RouteTest />}></Route>
          <Route path={'/addreceipe'} element={<Addreceipt />}></Route>

          <Route path={'*'} element={<>Nothing there</>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
