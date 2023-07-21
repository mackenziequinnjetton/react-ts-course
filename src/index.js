import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <label for="name" class="label">enter email</label>
      <input id="name" type="text" />
      <button style="background-color: red; color: white;">Submit</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);