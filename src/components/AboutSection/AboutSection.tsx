import BulletPointList from '../../components/AboutSection/BulletPointList';

interface AboutSectionProps {
  heading?: string;
  title?: string;
  subtitle?: string;
  paragraph: string;
  bulletPoints?: string[];
  headingFontSize?: string;
  titleFontSize?: string;
  paragraphFontSize?: string;
  alignmentClasses?: string;
  bgColor?: string;
  textColor?: string;
}

const AboutSection = ({
  heading,
  title,
  paragraph,
  bulletPoints,
  subtitle,
  headingFontSize = 'text-3xl',
  titleFontSize = 'text-2xl',
  paragraphFontSize = 'text-lg',
  alignmentClasses = 'text-center',
  bgColor = '',
  textColor = 'text-white',
}: AboutSectionProps) => {
  return (
    <section className={`${bgColor}`}>
      <div
        className={`flex flex-col items-left justify-center ${alignmentClasses}`}
      >
        <h2 className={`${headingFontSize} self-center font-bold mb-4`}>
          {heading}
        </h2>
        <div className={`${textColor}`}>
          <h3 className={`${titleFontSize} font-semibold mb-3`}>{title}</h3>
          <p className='text-left'>{subtitle}</p>
          <p className={`${paragraphFontSize} mb-6`}>{paragraph}</p>
        </div>

        <BulletPointList items={bulletPoints} textColor={textColor} />
      </div>
    </section>
  );
};
export default AboutSection;
