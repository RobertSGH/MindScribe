import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='spinner'>
        <div className='dot dot-one'></div>
        <div className='dot dot-two'></div>
        <div className='dot dot-three'></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
