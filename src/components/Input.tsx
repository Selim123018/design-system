import React from 'react';
import { Input } from 'antd';

// Define the props for the reusable Input component
interface MyInputProps {
  label: string; // Custom label for the input
}

// Reusable Input component
const MyInput: React.FC<MyInputProps> = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <Input />
    </div>
  );
};

export default MyInput;
