import Image from 'next/image';

interface ContentSectionProps {
  heading: string;
  paragraph: string;
  imagePath?: any;
  imageSide?: 'left' | 'right';
  textAlign?: 'left' | 'center' | 'right';
  imageShape?: 'rounded' | 'circle' | 'none';
  imageBgColor?: string;
  id?: string;
}

const ContentSection = ({
  heading,
  paragraph,
  imagePath,
  imageSide = 'left',
  textAlign = 'left',
  imageShape = 'rounded',
  imageBgColor = 'bg-transparent',
  id,
}: ContentSectionProps) => {
  const imageContainerClasses = `
    md:w-1/2 flex justify-center ${imageBgColor} 
    ${
      imageShape === 'circle'
        ? 'rounded-full'
        : imageShape === 'rounded'
        ? 'rounded-lg'
        : ''
    }
  `;

  const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section
      id={id}
      className={`flex flex-col md:flex-row ${
        imageSide === 'right' ? 'md:flex-row-reverse' : ''
      } justify-between items-center gap-8 p-4`}
    >
      <div className={`md:w-1/2 ${textAlignmentClasses[textAlign]}`}>
        <h3 className='text-2xl font-bold'>{heading}</h3>
        <p className='mt-4'>{paragraph}</p>
      </div>
      <div className={imageContainerClasses}>
        <Image src={imagePath} alt={heading} width={400} height={400} />
      </div>
    </section>
  );
};
export default ContentSection;
