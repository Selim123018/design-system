import React from 'react';
import { Input, InputProps } from 'antd';

// Define the props for the reusable Input component
interface MyInputProps extends InputProps {
  label: string; // Custom label for the input
}

// Reusable Input component
const MyInput: React.FC<MyInputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...props} />
    </div>
  );
};

export default MyInput;