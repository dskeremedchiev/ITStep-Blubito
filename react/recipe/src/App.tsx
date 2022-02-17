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
import Icndb from './components/Icndb';
import Icnfba from './components/Icnfba';
import Weather from './components/Weather';
import LodashTest from './components/LodashTest';
import MomentTest from './components/MomentTest';
import Exams from './components/Exams';
import TestUseMemo from './components/TestUseMemo';
import TestUseRef from './components/TestUseRef';
import FluentUITest from './components/FluentUITest';

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
          <Route path={'/icndbf'} element={<Icndb />}></Route>
          <Route path={'/icndba'} element={<Icnfba />}></Route>
          <Route path={'/weather'} element={<Weather />}></Route>
          <Route path={'/lotest'} element={<LodashTest />}></Route>
          <Route path={'/motest'} element={<MomentTest />}></Route>
          <Route path={'/exams'} element={<Exams />}></Route>
          <Route path={'/testusememo'} element={<TestUseMemo />}></Route>
          <Route path={'/testuseref'} element={<TestUseRef />}></Route>
          <Route path={'/fluentui'} element={<FluentUITest />}></Route>
          <Route path={'*'} element={<>Nothing there</>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
