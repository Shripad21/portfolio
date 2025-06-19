import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-800 to-black">
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;