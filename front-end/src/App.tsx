import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/layout';
import Home from './components/home';
import ProjectSummary from './components/projectsummary';
import TeamPresentation from './components/team';
import DataPage from '../src/pages/data';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/#about" element={<ProjectSummary />} />
          <Route path="/#contact" element={<TeamPresentation />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;