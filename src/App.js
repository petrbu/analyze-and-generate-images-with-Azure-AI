import React from 'react';

function App() {
  const value = 'World 2';
  
  return (
    <div>
      <div>Hello {value}</div>
      <input type="text" placeholder="Enter URL" />&nbsp;
      <br></br>
      <button>Analyze</button>&nbsp;
      <button>Generate</button>
    </div>
  );
}

export default App;
