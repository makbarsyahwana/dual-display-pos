import React from 'react';
import CartList from '../molecules/CartList';

type CartProps = {
  items: Array<{ name: string }>;
};

const Cart: React.FC<CartProps> = ({ items }) => {
  return (
    <div>
      <CartList items={items} />
    </div>
  );
};

export default Cart;
