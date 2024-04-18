interface SectionHeadingProps {
  mainText: string;
  subText?: string;
  textBackground?: string;
  spanBackground?: string;
  textColor?: string;
}

const SectionHeading = ({
  textColor,
  mainText,
  subText,
  textBackground,
  spanBackground,
}: SectionHeadingProps) => {
  const colorClasses: Record<string, string> = {
    primary: 'bg-primary',
    primaryLight: 'bg-primaryLight',
    secondary: 'bg-secondary',
    secondaryLight: 'bg-secondaryLight',
    bluePrimary: 'bg-bluePrimary',
    greyPrimary: 'bg-greyPrimary',
    danger: 'bg-danger',
    dropdownBg: 'bg-dropdownBg',
  };

  const backgroundClasses: Record<string, string> = {
    primary: 'bg-primary',
    primaryLight: 'bg-primaryLight',
    secondary: 'bg-secondary',
    secondaryLight: 'bg-secondaryLight',
    bluePrimary: 'bg-bluePrimary',
    greyPrimary: 'bg-greyPrimary',
    danger: 'bg-danger',
    dropdownBg: 'bg-dropdownBg',
    transparent: '',
  };
  const textStyle = `relative text-xl md:text-2xl lg:text-4xl ${
    textColor ? colorClasses[textColor] : ''
  } inline-block px-4 py-2 ${
    textBackground ? `${backgroundClasses[textBackground]}` : ''
  }`;
  const spanStyle = `absolute top-1 -z-10 w-full h-full ${
    spanBackground ? `${backgroundClasses[spanBackground]}` : ''
  } left-1`;

  return (
    <div className='text-center content-center'>
      <div className='relative z-10 inline-block m-5 md:m-1'>
        <h2 className={textStyle}>
          {mainText}
          <span className={spanStyle}></span>
        </h2>
      </div>
      <p className='text-sm md:text-2xl text-greyPrimary md:mt-1'>{subText}</p>
    </div>
  );
};

export default SectionHeading;
