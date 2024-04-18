import ContentSection from '@/components/ContentSection';
import RootLayout from '@/ui/Layout';
import FirstImage from '../../../public/images/FeaturesPage/Question.svg';
import SecondImage from '../../../public/images/FeaturesPage/Social Media Carousel.svg';
import ThirdImage from '../../../public/images/FeaturesPage/Learn Programming.svg';
import FourthImage from '../../../public/images/FeaturesPage/Coding 3.svg';

import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTA/CTASection';

const Features = () => {
  return (
    <RootLayout>
      <SectionHeading
        textColor='blue'
        textBackground='dropdownBg'
        spanBackground='primary'
        mainText='From Thought to Triumph'
        subText='Navigate your journey of growth and discovery with ease.'
      />
      <ContentSection
        id='fact-checking'
        imagePath={FirstImage}
        textAlign='right'
        imageSide='right'
        heading='Trust, But Verify with Ease'
        paragraph='Navigate the sea of information with MindScribe`s Fact-Checking feature. Instantly verify the accuracy of any claim, quote, or statistic, ensuring you`re always informed with the truth. Our tool cross-references reliable sources in real-time, providing you with peace of mind and accuracy at the click of a button. Empower your research, enhance your credibility, and stay confidently informed.'
      />
      <ContentSection
        id='short-content'
        imagePath={SecondImage}
        textAlign='right'
        imageSide='right'
        heading='Effortless Content Creation'
        paragraph='Spark your social media, enhance productivity, and engage your audience with MindScribe`s Short Content Generation. Whether it`s captivating tweets, impactful social posts, or concise emails, our tool crafts the perfect message for any occasion. Tailor-made for efficiency and effectiveness, this feature saves you time while elevating your communication game.'
      />
      <CTASection
        heading='Unlock Your Creative Potential'
        paragraph='Don`t let your ideas stay just ideas. With MindScribe, turn your thoughts into reality, your curiosity into knowledge, and your insights into action.'
        primaryButtonLink='/mindscribe'
        primaryButtonText='Try it out'
        bgColor='bg-gradient-to-b from-dropdownBg to-bluePrimary'
        textColor='text-white'
        primaryButtonVariant='ghost'
      />
      <ContentSection
        id='personal-learning'
        imagePath={ThirdImage}
        heading='Customized Knowledge, Personal Growth'
        paragraph='Unlock a world tailored to your curiosity with MindScribe`s Personalized Learning. From complex theories simplified to quizzes that challenge, we adapt to your pace and style. Dive into topics that intrigue you, with content optimized for understanding and retention. Make learning an adventure that`s as unique as you are.'
      />
      <ContentSection
        id='creative-writing'
        imagePath={FourthImage}
        heading='Unlock Your Literary Genius'
        paragraph='Overcome writer`s block and bring your stories to life with MindScribe`s Creative Writing Assistance. From generating ideas to fleshing out characters and plots, our tool is the silent co-author you`ve always wished for. Craft narratives that captivate, with guidance and inspiration every step of the way.'
      />
      <SectionHeading
        textColor='green'
        textBackground='primary'
        spanBackground='dropdownBg'
        mainText='Words That Work Wonders.'
        subText='Make every email, essay, and post stand out with minimal effort.'
      />
    </RootLayout>
  );
};

export default Features;
