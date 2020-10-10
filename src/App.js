import React from 'react';
// import Contact from './components/Contact';
import ContactList from './components/ContactList';
import './App.css'

function App() {
  return (
    <div className="App">
      
      {/* <Contact name="Mathew Brown" avatar="https://randomuser.me/api/portraits/men/72.jpg" online/>
      <Contact name="Jayden Willis" avatar="https://randomuser.me/api/portraits/men/77.jpg"/>
      <Contact name="Norma Sims" avatar="https://randomuser.me/api/portraits/women/2.jpg"/> */}

      <ContactList />
    </div>
  );
}

export default App;
