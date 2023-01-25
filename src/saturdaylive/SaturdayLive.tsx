import React from 'react';
import { Layout } from '../components';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Demo, Gallery, Home, Repertoir, Contact } from '../pages';
import { About } from '../pages/About';

const SaturdayLive = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/repertuar" element={<Repertoir />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default SaturdayLive;
