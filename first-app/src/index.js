import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = "Click me!"

  return (
    <div>
      <label htmlFor="name" className="label">enter email</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: "red", color: "white"}}>
        {buttonText }
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);