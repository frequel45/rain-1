import React from 'react';
import Grid from './components/Grid';
import './styles.css';

function App() {
  return (
    <div className="app">
      <h1>Rain Animation</h1>
      <Grid rows={15} columns={20} />
    </div>
  );
}

export default App;
