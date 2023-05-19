import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <div className="App">
   <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/mypage">MyPage</Link>
          </li>
          <li>
            <Link to = "/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/mypage" element = {<MyPage />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
      </Routes>
    </div>
   </BrowserRouter>
  </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>;
}

// Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;
