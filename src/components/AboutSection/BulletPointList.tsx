import React from 'react';
interface BulletPointListProps {
  items?: string[];
  textColor?: string;
}

const BulletPointList = ({
  items,
  textColor = 'text-gray-800',
}: BulletPointListProps) => {
  return (
    <ul className={`text-left list-disc pl-5 space-y-2 ${textColor}`}>
      {items && items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

export default BulletPointList;
