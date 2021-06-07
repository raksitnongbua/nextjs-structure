import React from 'react';

export type Props = {
  label: string;
};
export const Button: React.FC<Props> = ({ label }) => {
  return (
    <button className='bg-blue-600 p-2 text-white uppercase'>{label}</button>
  );
};
