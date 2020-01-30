import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  className?: string;
}

export const Input: React.FC<Props> = ({ name, className }) => {
  const { register } = useFormContext();
  return <input name={name} ref={register} className={className} />;
};
