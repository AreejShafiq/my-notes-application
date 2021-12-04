import React from "react";
import Header from "./Components/Header";
import PageNote  from './Pages/PageNote';
import PageNotes  from './Pages/PageNotes';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'





function App() {
  return (
    <Router>
      <Routes>
         {/* <Header/> */}
         
         <Route path='/' element={<PageNotes/>}/>
         <Route path='/note' element={<PageNote/>}/>
         {/* <PageNote/> */}

         

      </Routes>
    </Router>
  );
}

export default App;
