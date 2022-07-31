
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main'
import Admin from './pages/Admin';
import Header from './components/Header/Header';
import { useState } from 'react';
import {ShoppingCartProvider} from './context/ShoppingCardContext'
import {DbContextProvider} from './context/DbContext'

function App() {
  const [openCata,setOpenCata] = useState(false)
  const [openList,setOpenList] = useState(false)

  return (
    <DbContextProvider>
        <ShoppingCartProvider>
          <Header openCata={openCata} setOpenCata={setOpenCata} openList={openList} setOpenList={setOpenList}/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/admin' element={<Admin/>} />
          </Routes>
        </ShoppingCartProvider>
    </DbContextProvider>
    

  );
}

export default App;
