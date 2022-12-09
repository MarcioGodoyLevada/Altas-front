import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import User from '../pages/User';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<User />} />

    </Routes>
  );
}

export default PublicRoutes;
