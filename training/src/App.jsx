import React from 'react';
import { ChildrenDemo } from './pages';
import { theme } from './theme';

function App() {
  const myTheme = theme();
  return (
    <div className={myTheme.root}>
      <ChildrenDemo />
    </div>
  );
}
export default App;
