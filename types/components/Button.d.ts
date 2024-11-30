import React from 'react';
interface MyButtonProps {
    label: string;
    customClassName?: string;
    customStyle?: React.CSSProperties;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
