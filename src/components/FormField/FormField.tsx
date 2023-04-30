import React from 'react';
import './FormField.scss';

interface Props {
  children?: React.ReactNode;
}

export default function FormField({ children }: Props) {
  return <div className="form__field">{children}</div>;
}
