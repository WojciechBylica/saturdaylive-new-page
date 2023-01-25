import React from 'react';

import { Layout } from '../components';
import { Navigate } from 'react-router-dom';
import { Demo, Gallery, Home, Repertoir, Contact } from '../pages';
import { About } from '../pages/About';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/repertuar" element={<Repertoir />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

const SaturdayLive = () => {
  return <RouterProvider router={router} />;
};

export default SaturdayLive;
