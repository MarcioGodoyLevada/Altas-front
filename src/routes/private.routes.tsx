import { Routes, Route } from 'react-router-dom';

import Friends from '../pages/Friends';

import Layout from '../templates/Layout';
import Login from '../pages/Login';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/friends" element={<Friends />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
