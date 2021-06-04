import React from 'react';

type Props = {
  label: string;
};
export const Button: React.FC<Props> = ({ label = 'Text' }) => {
  return <button className='bg-red'>{label}</button>;
};
