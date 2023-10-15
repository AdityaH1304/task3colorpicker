import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

const App = () => {
  const colors = ['#FF5733', '#FFC300', '#36D7B7', '#3498DB', '#9B59B6'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

