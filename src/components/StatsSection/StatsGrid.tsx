interface StatsGridProps {
  children?: React.ReactNode;
}

const StatsGrid = ({ children }: StatsGridProps) => {
  return (
    <div className='p-4 max-w-full'>
      <div className='grid md:grid-cols-4 sm:grid-cols-1 grid-rows-1 gap-2'>
        {children}
      </div>
    </div>
  );
};

export default StatsGrid;
