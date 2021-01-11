import React from 'react';
import { InputDemo } from './pages';
import { theme } from './theme';

function App() {
  const myTheme = theme();
  return (
    <div className={myTheme.root}>
      <InputDemo />
    </div>
  );
}
export default App;
