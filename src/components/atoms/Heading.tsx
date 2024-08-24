import React from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};

export default Heading;
