
import React from 'react';
import { Button, ButtonProps } from 'antd';

interface MyButtonProps extends ButtonProps {
  label: string;
  customClassName?: string; // Optional custom class name
  customStyle?: React.CSSProperties; // Optional inline style
}

const MyButton: React.FC<MyButtonProps> = ({ label, customClassName, customStyle, ...props }) => {
  return (
    <Button {...props} className={customClassName} style={customStyle}>
      {label}
    </Button>
  );
};

export default MyButton;
