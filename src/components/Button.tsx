
import React from 'react';
import { Button } from 'antd';

interface MyButtonProps {
  label: string;
  customClassName?: string; // Optional custom class name
  customStyle?: React.CSSProperties; // Optional inline style
}

const MyButton: React.FC<MyButtonProps> = ({ label, customClassName, customStyle }) => {
  return (
    <Button className={customClassName} style={customStyle}>
      {label}
    </Button>
  );
};

export default MyButton;
