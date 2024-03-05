import React from 'react';
import HomePage from './components/Home/HomePage';
import './App.css'
import LoginPage from './components/Login/LoginPage';

const App: React.FC = () => {
  return (
    <div id="App">
      <LoginPage />
    </div>
  );
};

export default App;
