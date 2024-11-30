import React from 'react';
import { InputProps } from 'antd';
interface MyInputProps extends InputProps {
    label: string;
}
declare const MyInput: React.FC<MyInputProps>;
export default MyInput;
