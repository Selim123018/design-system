import React from 'react';
interface MyCardProps {
    title: string;
    description?: string;
    coverImageUrl?: string;
    footerContent?: React.ReactNode;
    buttonText?: string;
    onButtonClick?: () => void;
}
declare const MyCard: React.FC<MyCardProps>;
export default MyCard;
