import React from 'react';
import { useSession } from '../contexts/session';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';

const AppRoutes: React.FC = () => {
  const { user } = useSession();

  return user?.id ? <PrivateRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
