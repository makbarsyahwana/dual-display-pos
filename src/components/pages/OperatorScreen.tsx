import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { addItem } from '../../store/store';
import Button from '../atoms/Button';
import Cart from '../organisms/Cart';
import ScreenTemplate from '../templates/ScreenTemplate';

const OperatorScreen: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addItem({ name: 'Item ' + (cart.length + 1) }));
  };

  return (
    <ScreenTemplate title="Operator Screen">
      <Button onClick={addItemToCart}>Add Item</Button>
      <Cart items={cart} />
    </ScreenTemplate>
  );
};

export default OperatorScreen;
