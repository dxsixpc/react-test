import React from 'react'
import logo from './logo.svg'
import './App.css'

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export const sum = (a: number, b: number) => {
  return a + b
}

export default App
