import React from 'react';

type ListItemProps = {
  text: string;
};

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default ListItem;
