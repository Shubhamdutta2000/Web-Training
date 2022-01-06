import React from 'react';
import './App.css';

import Compressor from "./Components/Compressor";
import Navbars from './Components/Navbar';

function App() {
  return (
    <> {/*The return should have only one div otherwise it will give an error that's why it has been wrapped uder this */}
    <Navbars />
    <Compressor />
    </>
  );
}

export default App;
