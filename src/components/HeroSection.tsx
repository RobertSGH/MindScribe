import Link from 'next/link';
import Button from '@/ui/Button';
import LetterReveal from './Animations/FlickeringText';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  return (
    // <section className='flex items-center justify-center min-h-screen text-white px-4'>
    <section className='container mx-auto flex flex-col items-center justify-between py-12 md:flex-row'>
      <div className='md:w-1/2'>
        <h1 className='font-bold text-4xl md:text-6xl leading-tight'>
          {title}
        </h1>
        <p className='mt-6 text-md md:text-xl leading-relaxed md:pr-4'>
          {subtitle}
        </p>
        <Link href={buttonLink} passHref>
          <div className='mt-5'>
            <Button variant='primary' size='md'>
              {buttonText}
            </Button>
          </div>
        </Link>
      </div>
      <div className='flex justify-center md:w-1/2 mt-10 md:mt-0'>
        {/* Placeholder for an image/illustration */}

        <div className='p-2 overflow-hidden'>
          <div
            className='w-auto h-auto bg-cover bg-center rounded-lg break-words'
            // style={{
            //   backgroundImage:
            //     'url(../../public/images/Screenshot 2024-04-09 100956.png)',
            // }}
          >
            {/* Optional: Overlay or additional styling */}
            <LetterReveal
              words={[
                'Take a moment for yourself',
                'Anything on your mind?',
                'The age we live in, just amazing !',
              ]}
              cycleTime={3000}
              holdTime={5000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
