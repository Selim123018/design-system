import React from 'react';
import { Card, CardProps, Button } from 'antd';

interface MyCardProps extends CardProps {
  title: string;
  description?: string;
  coverImageUrl?: string;
  footerContent?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}

const MyCard: React.FC<MyCardProps> = ({
  title,
  description,
  coverImageUrl,
  footerContent,
  buttonText,
  onButtonClick,
  children,
  ...props
}) => {
  return (
    <Card
      title={title}
      extra={<a href="#">More</a>}
      cover={coverImageUrl && <img alt="example" src={coverImageUrl} />}
      {...props}
    >
      {description && <p>{description}</p>}
      {children}

      {/* Optionally render footer content */}
      {footerContent && (
        <div style={{ marginTop: '16px', borderTop: '1px solid #e8e8e8', paddingTop: '10px' }}>
          {footerContent}
        </div>
      )}
    </Card>
  );
};

export default MyCard;
