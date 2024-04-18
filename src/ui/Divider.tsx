import React from 'react';

interface DividerProps {
  thickness?: string;
  orientation?: 'horizontal' | 'vertical';
  marginY?: number;
  marginX?: number;
}

const Divider = ({
  orientation = 'horizontal',
  thickness = '0.2px',
  marginY = 4,
  marginX = 0,
}: DividerProps) => {
  const dividerStyle = {
    backgroundColor: '#4B5563',
    borderRadius: '9999px',
    width: orientation === 'horizontal' ? '100%' : thickness,
    height: orientation === 'horizontal' ? thickness : '100%',
    marginTop: marginY * 0.25 + 'rem',
    marginBottom: marginY * 0.25 + 'rem',
    marginLeft: marginX * 0.25 + 'rem',
    marginRight: marginX * 0.25 + 'rem',
  };

  return <div style={dividerStyle} />;
};

export default Divider;
