import HeroSection from '@/components/HeroSection';
import Layout from '@/ui/Layout';
import Introduction from '@/components/IntroductionSection';
import ShieldIcon from '../../public/icons/Shield.json';
import LightBulb from '../../public/icons/lightbulb.json';
import Stopwatch from '../../public/icons/SLA.json';
import IntroductionLayout from '@/ui/IntroductionLayout';
import SectionHeading from '@/components/SectionHeading';
import ContentSection from '@/components/ContentSection';
import FirstImage from '../../public/images//LandingPage/undraw_programming_re_kg9v.svg';
import SecondImage from '../../public/images/LandingPage/undraw_road_to_knowledge_m8s0.svg';
import ThirdImage from '../../public/images/LandingPage/undraw_process_re_gws7.svg';
import StatsGrid from '@/components/StatsSection/StatsGrid';
import StatCard from '@/components/StatsSection/StatCard';
import CTASection from '@/components/CTA/CTASection';

export default function Home() {
  return (
    <Layout>
      <div className='space-y-8 my-12'>
        <HeroSection
          title='Welcome to MindScribe: Unleash Your Potential'
          subtitle='Your personal assistant for writing, learning, and staying informed. Transform your ideas into polished content, explore knowledge, and keep up with the world around you – all in one place.'
          buttonText='Get started'
          buttonLink='/mindscribe'
        />
        <IntroductionLayout>
          <Introduction
            animationData={LightBulb}
            heading='Empower Your Words'
            paragraph='MindScribe transforms your thoughts into impactful communication, learning, and discovery. Experience the future of personal and professional growth.'
          />
          <Introduction
            animationData={ShieldIcon}
            heading='Privacy First'
            paragraph='Your ideas stay yours. With client-side processing, enjoy unmatched privacy as your data never leaves your device.'
          />
          <Introduction
            animationData={Stopwatch}
            heading='Swift and Seamless'
            paragraph='Instantly generate, learn, and stay informed with lightning-fast performance that keeps pace with your thoughts.'
          />
        </IntroductionLayout>
      </div>
      <div className='my-12 p-6'>
        <SectionHeading
          textBackground='primary'
          spanBackground='greyPrimary'
          mainText='Limitless Learning.'
          subText='Dive into a sea of knowledge tailored just for you.'
        />
      </div>
      <div className='my-12 space-y-8'>
        <ContentSection
          imagePath={FirstImage}
          heading='Master Your Inbox with Privacy at Its Core'
          paragraph="Transform your email drafting process with MindScribe's Smart Email Composer. Our client-side technology ensures your sensitive information never leaves your device, offering unmatched confidentiality. Enjoy the swift, reliable creation of drafts, comprehensive polishing for clarity and tone, and efficient summarization of lengthy threads, all executed locally for maximum security and speed."
        />
        <ContentSection
          // imageBgColor='bg-purple-100'
          // imageShape='none'
          textAlign='right'
          imageSide='right'
          imagePath={SecondImage}
          heading='Elevate Your Learning Experience—Securely and Swiftly'
          paragraph="Dive into a world of knowledge with MindScribe's Interactive Learning Assistant, where your curiosity meets our commitment to privacy. Our application runs directly on your device, ensuring that your learning materials and queries remain your own. From complex explanations to personalized quizzes and concise summaries, enjoy a seamless, secure, and instant learning experience that's as private as it is powerful.
        Creative Writing Assistant"
        />
        <ContentSection
          // imageShape='none'
          textAlign='left'
          imageSide='left'
          imagePath={ThirdImage}
          heading='Unleash Your Creativity, No Strings Attached'
          paragraph="Break through creative blocks with MindScribe's Creative Writing Assistant, designed to inspire and refine your writing without compromising privacy. Whether generating fresh ideas, expanding snippets into stories, or revising for the perfect tone—all processing happens on your device, ensuring your creative works remain exclusively yours. Fast, reliable, and entirely confidential, it's the perfect muse for writers who value privacy as much as creativity."
        />
      </div>
      <div className='flex flex-col md:flex-row justify-evenly md:space-x-10 my-16'>
        <SectionHeading
          textBackground='secondary'
          spanBackground='greyPrimary'
          mainText='About numbers...'
        />
        <StatsGrid>
          <StatCard
            number='95%'
            title='Satisfaction Rate'
            description='An overwhelming majority of our users report a high level of satisfaction, with 95% praising MindScribe for its ease of use, efficiency, and privacy-focused design.'
            styleType='large'
          />
          <StatCard
            number='5 Seconds'
            title='Average Response Time'
            description='Fast, efficient, and ready when you are.'
            styleType='small'
          />
          <StatCard
            number='3x'
            title='Productivity Boost'
            description='Transform your workflow with tools designed for efficiency.'
            styleType='large'
          />
          <StatCard
            number='100+'
            title='Countries Reached'
            description='Used in over 100 countries, bringing diverse insights and perspectives into a single platform.'
            styleType='large'
          />
          <StatCard
            number='80%'
            title='Satisfied Customers'
            description='Turn curiosity into knowledge more effectively.'
            styleType='small'
          />
        </StatsGrid>
      </div>
      <CTASection
        heading='Ready to Transform Your Digital Experience?'
        paragraph='Embark on a journey where creativity meets productivity, and privacy is a priority. Begin your adventure today and see where your mind can take you.'
        primaryButtonLink='/mindscribe'
        primaryButtonText='Begin Now'
        secondaryButtonLink='/features'
        secondaryButtonText='Learn More'
        bgColor='bg-gradient-to-l from-secondary to-primary'
        textColor='text-white'
        primaryButtonVariant='outline'
        secondaryButtonVariant='ghost'
      />
    </Layout>
  );
}
