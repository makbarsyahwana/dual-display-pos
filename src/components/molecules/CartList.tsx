import React from 'react';
import ListItem from '../atoms/ListItem';

type CartListProps = {
  items: Array<{ name: string }>;
};

const CartList: React.FC<CartListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item.name} />
      ))}
    </ul>
  );
};

export default CartList;
