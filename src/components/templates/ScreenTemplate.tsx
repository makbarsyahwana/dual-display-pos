import React from 'react';
import Heading from '../atoms/Heading';

type ScreenTemplateProps = {
  title: string;
  children: React.ReactNode;
};

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({ title, children }) => {
  return (
    <div>
      <Heading level={1}>{title}</Heading>
      {children}
    </div>
  );
};

export default ScreenTemplate;
