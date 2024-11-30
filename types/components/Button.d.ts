import React from 'react';
import { ButtonProps } from 'antd';
interface MyButtonProps extends ButtonProps {
    label: string;
    customClassName?: string;
    customStyle?: React.CSSProperties;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
