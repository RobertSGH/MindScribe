import React from 'react';
import AboutSection from '@/components/AboutSection/AboutSection';
import RootLayout from '@/ui/Layout';

const AboutPage = () => {
  return (
    <RootLayout>
      <div className='space-y-12 mt-12'>
        <AboutSection
          heading='About MindScribe'
          paragraph='At MindScribe, we believe that technology should enhance your ability to think, create, and discover. Our web application brings the power of state-of-the-art machine learning directly to your browser, enabling a host of functionalities that revolutionize the way you work, learn, and interact with information.'
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          textColor='text-greyPrimary'
        />
        <AboutSection
          title='Powered by Transformers.js'
          paragraph='MindScribe utilizes Transformers.js, a groundbreaking technology that allows you to run advanced machine learning models seamlessly in your browser. This tool is functionally equivalent to Hugging Face`s renowned Transformers library, adapted for the web with Transformers.js. It supports a wide range of tasks across different modalities:'
          bulletPoints={[
            'Computer Vision: Apply image classification, object detection, and segmentation directly in your application, perfect for creative and analytical projects.',
            'Audio Processing: Utilize features like automatic speech recognition and audio classification to integrate a broader range of media into your workflows.',
            'Multimodal Interactions: Engage with zero-shot image classification among other cutting-edge capabilities that bridge different types of data inputs seamlessly.',
          ]}
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />
        <AboutSection
          title='Client-Side Efficiency'
          paragraph='With the entire operation running locally on your device via ONNX Runtime, MindScribe ensures that your data remains private and secure. There’s no need to worry about server downtimes or data breaches. Everything from generating creative content and personalized learning modules to real-time collaboration and comprehensive fact-checking is handled on your machine, ensuring speed and reliability without compromising privacy.'
          headingFontSize='text-4xl'
          titleFontSize='text-xl'
          paragraphFontSize='text-md'
          alignmentClasses='text-left'
          textColor='text-greyPrimary'
        />
        <AboutSection
          title='Simplicity in Innovation'
          paragraph='Adopting MindScribe is as easy as using any regular app, thanks to the intuitive pipeline API that groups preprocessing of inputs and postprocessing of outputs. This means less time learning new tools and more time achieving great results. Whether you`re a professional looking to streamline operations, a student aiming to enhance your studies, or a creative soul eager to expand your artistic horizons, MindScribe is designed to support and elevate your endeavors.'
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

export default AboutPage;
