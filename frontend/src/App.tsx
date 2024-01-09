import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import WhatsNew from './pages/WhatsNew';
import Trending from './pages/Trending';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
