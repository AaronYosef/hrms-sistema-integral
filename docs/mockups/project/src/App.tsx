import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PantallaPrincipal from './pages/PantallaPrincipal';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<PantallaPrincipal />} />
			<Route path="/PantallaPrincipal" element={<PantallaPrincipal />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;