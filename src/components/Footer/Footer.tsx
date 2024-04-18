import Divider from '@/ui/Divider';
import Image from 'next/image';
import MindScribeText from '../../../public/icons/mindscribeText.svg';

interface FooterProps {
  companyName: string;
  navigation: { title: string; items: { name: string; link: string }[] }[];
  bgColor?: string;
  textColor?: string;
  copyrightText?: string;
}

const Footer = ({
  companyName,
  navigation,
  bgColor = '',
  textColor = 'text-greyPrimary',
}: // copyrightText = `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`,
FooterProps) => {
  return (
    <footer className={`${bgColor} ${textColor} mt-20 py-8`}>
      <div className='max-w-4xl mx-auto px-4 lg:px-0'>
        <div className='flex flex-col justify-between items-center'>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-4 w-full lg:w-auto  my-4'>
            {navigation.map((section) => (
              <div key={section.title} className='mb-4 lg:mb-0'>
                <h2 className='text-xs md:text-base font-semibold mb-3'>
                  {section.title}
                </h2>
                <ul className='text-xs flex flex-col md:items-center lg:items-start'>
                  {section.items.map((item) => (
                    <li key={item.name} className='mb-2 lg:mb-1'>
                      <a href={item.link} className='hover:underline'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <div className=''>
          <a href='/' className=''>
            <Image
              className='h-16 md:h-20 lg:h-28'
              src={MindScribeText}
              alt=''
            />
          </a>
          {/* {copyrightText} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
