import React from 'react';
import { CardProps } from 'antd';
interface MyCardProps extends CardProps {
    title: string;
    description?: string;
    coverImageUrl?: string;
    footerContent?: React.ReactNode;
    buttonText?: string;
    onButtonClick?: () => void;
}
declare const MyCard: React.FC<MyCardProps>;
export default MyCard;
