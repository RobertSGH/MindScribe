import React from 'react';
import Link from 'next/link';
import Button from '@/ui/Button';

interface CTASectionProps {
  heading: string;
  paragraph: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
  textColor?: string;
  primaryButtonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  secondaryButtonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

const CTASection = ({
  heading,
  paragraph,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  primaryButtonVariant = 'primary',
  secondaryButtonVariant = 'ghost',
}: CTASectionProps) => {
  return (
    <section
      className={`${bgColor} ${textColor} py-6 px-12 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-12 rounded mx-auto`}
    >
      <div>
        <h2 className='text-center md:text-left text-lg te md:text-xl lg:text-2xl xl:text-3xl font-bold'>
          {heading}
        </h2>
        <p className='text-center md:text-left text-base md:text-lg lg:text-xl mt-2'>
          {paragraph}
        </p>
      </div>

      {/* <Divider color='greyPrimary' /> */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-2 whitespace-nowrap'>
        <Link href={primaryButtonLink} passHref>
          <div className='mt-2'>
            <Button shape='rounded' variant={primaryButtonVariant}>
              {primaryButtonText}
            </Button>
          </div>
        </Link>
        {secondaryButtonText && secondaryButtonLink && (
          <Link href={secondaryButtonLink} passHref>
            <div>
              <Button shape='rounded' variant={secondaryButtonVariant}>
                {secondaryButtonText}
              </Button>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
