const IntroductionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='p-4'>
      {/* <div className='max-w-7xl mx-auto'> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>{children}</div>
      {/* </div> */}
    </div>
  );
};

export default IntroductionLayout;
