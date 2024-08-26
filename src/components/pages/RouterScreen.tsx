import React, { useEffect } from 'react';
import useIsExtendedMonitor from '../../hooks/useIsExtendedMonitor';
import { Navigate, redirect } from 'react-router-dom';

const RouterScreen: React.FC = () => {
  const isExtendedMonitor = useIsExtendedMonitor()

  useEffect(() => {
    isExtendedMonitor ? window.location.href = '/customer' : window.location.href = '/operator'
  }, [isExtendedMonitor]);

  return null
//   (
//     !isExtendedMonitor ? 
//     <Navigate to={'/operator'} /> :
//     <Navigate to={'/customer'} />
//   );
};

export default RouterScreen;
