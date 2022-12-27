import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import Counter from './components/Counter/Counter';
import EditContact from './components/EditContact/EditContact';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/add' element={<AddContact />} />
        <Route path='/edit/:id' element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;
