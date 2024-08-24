import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { setCart } from '../../store/store';
import Cart from '../organisms/Cart';
import ScreenTemplate from '../templates/ScreenTemplate';

const CustomerScreen: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  return (
    <ScreenTemplate title="Customer Screen">
      <Cart items={cart} />
    </ScreenTemplate>
  );
};

export default CustomerScreen;
