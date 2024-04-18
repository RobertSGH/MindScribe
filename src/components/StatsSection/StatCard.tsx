import React from 'react';

interface StatCardProps {
  number: string;
  title: string;
  description: string;
  styleType?: 'large' | 'small';
  background?: string;
}

const StatCard = ({
  number,
  title,
  description,
  background,
  styleType = 'small',
}: StatCardProps) => {
  const baseStyles = `bg-${background} rounded-xl shadow-md p-4 m-2 text-center`;
  const largeStyles = 'col-span-2 row-span-2 text-2xl';
  const smallStyles = 'col-span-1 row-span-1 text-2xl';

  const cardClasses = `${baseStyles} ${
    styleType === 'large' ? largeStyles : smallStyles
  }`;

  return (
    <div className={cardClasses}>
      <p className='font-bold'>{number}</p>
      <h3 className='text-sm font-semibold mt-2'>{title}</h3>
      <p className='text-sm mt-1 text-greyPrimary'>{description}</p>
    </div>
  );
};

export default StatCard;
