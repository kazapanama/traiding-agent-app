
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main'
import Admin from './pages/Admin';
import Header from './components/Header/Header';
import { useState } from 'react';
import {ShoppingCartProvider} from './context/ShoppingCardContext'

function App() {
  const [openCata,setOpenCata] = useState(false)
  const [openList,setOpenList] = useState(false)

  return (
    <ShoppingCartProvider>
      <Header openCata={openCata} setOpenCata={setOpenCata} openList={openList} setOpenList={setOpenList}/>
      <Routes>
       <Route path='/' element={<Main/>} />
       <Route path='/admin' element={<Admin/>} />
      </Routes>
    </ShoppingCartProvider>

  );
}

export default App;
