import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <Header/>
      <Tasks/>
    </>
  );
}

export default App;