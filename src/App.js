import React from 'react'; // Import React
// import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import Home from './components/Home';
import { MainContextProvider} from './Context/mainContext';

function App() {

  return (
    <div className="App">
      <MainContextProvider>
        <Home />
      </MainContextProvider>

    </div>
  );
}

export default App;
