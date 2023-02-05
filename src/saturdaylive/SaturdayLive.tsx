import React from 'react';

import { Layout } from '../components';
import { Demo, Home, Repertoire, Contact } from '../pages';
import { About } from '../pages/About';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/repertuar" element={<Repertoire />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

const SaturdayLive = () => {
  return <RouterProvider router={router} />;
};

export default SaturdayLive;
