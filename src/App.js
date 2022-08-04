
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main'
import Admin from './pages/Admin';
import AddItem from './pages/AddItem';
import Orders from './pages/Orders';
import EditItems from './pages/EditItems';
import Header from './components/Header/Header';
import EditSingleItem from './pages/EditSingleItem';
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
            <Route path='/admin/create' element={<AddItem/>} />
            <Route path='/admin/orders' element={<Orders/>} />
            <Route path='/admin/edit' element={<EditItems/>} />
            <Route path='/admin/edit/:id' element={<EditSingleItem/>} />
          </Routes>
        </ShoppingCartProvider>
    </DbContextProvider>
    

  );
}

export default App;
