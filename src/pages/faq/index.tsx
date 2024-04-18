import AboutSection from '@/components/AboutSection/AboutSection';
import RootLayout from '@/ui/Layout';

const FAQ = () => {
  return (
    <RootLayout>
      <div className='space-y-14 mt-12'>
        <AboutSection
          heading='Frequently Asked Questions (FAQs)'
          subtitle='1. What is MindScribe?'
          paragraph='MindScribe is a versatile web application that enhances your ability to communicate effectively, learn efficiently, and stay informed. Powered by the innovative Transformers.js, it runs advanced machine learning models directly in your browser, handling tasks like text summarization, language translation, and much more—all while keeping your data private and secure on your device.'
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />
        <AboutSection
          subtitle='2. How does MindScribe ensure my privacy?'
          paragraph='MindScribe utilizes client-side processing, which means all operations—from data input to model predictions—are conducted on your own device. No data is sent to external servers, ensuring that your personal and professional information remains confidential and secure.'
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />
        <AboutSection
          subtitle='3. Can I use MindScribe for professional purposes?'
          paragraph='Absolutely! MindScribe is designed for both personal and professional use. Its features, such as the Smart Email Composer, Personalized Learning, and Creative Writing Assistant, are tailored to enhance productivity and creativity in professional settings, including businesses, educational institutions, and creative industries.'
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />

        <AboutSection
          subtitle='4. What types of tasks can MindScribe perform?'
          paragraph='MindScribe supports a wide range of tasks across various modalities including:'
          bulletPoints={[
            'Fact Checking',
            'Short content creation',
            'Learning tasks',
            'Creative writing',
          ]}
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />
        <AboutSection
          subtitle='5. Is there a learning curve to using MindScribe?'
          paragraph='MindScribe is built with ease of use in mind. It employs a pipeline API similar to Hugging Face’s Transformers library, making it straightforward for anyone familiar with basic web applications. Simple, intuitive controls and automatic handling of complex processing tasks mean that you can start benefiting from MindScribe`s features quickly, regardless of your technical background.'
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />
      </div>
    </RootLayout>
  );
};
export default FAQ;
