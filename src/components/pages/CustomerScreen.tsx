import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { setCart } from '../../store/store';
import Cart from '../organisms/Cart';
import ScreenTemplate from '../templates/ScreenTemplate';
import useIsExtendedMonitor from '../../hooks/useIsExtendedMonitor';
import { Navigate, redirect } from 'react-router-dom';

const CustomerScreen: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const isExtendedMonitor = useIsExtendedMonitor()


  return (
    !isExtendedMonitor ? 
    <Navigate to={'/operator'} /> :
    <ScreenTemplate title="Customer Screen">
      <Cart items={cart} />
    </ScreenTemplate>
  );
};

export default CustomerScreen;
