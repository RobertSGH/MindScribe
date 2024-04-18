'use client';
import Button from '@/ui/Button';
import RootLayout from '@/ui/Layout';
import { useState } from 'react';
import axios from 'axios';
import SectionHeading from '@/components/SectionHeading';

const MyAi = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const generateText = async (input?: string) => {
    const finalInput = typeof input === 'string' ? input : text;

    if (!finalInput) return;

    setText(finalInput);
    setLoading(true);

    try {
      const response = await axios.post('/api/route', { text: finalInput });

      if (Array.isArray(response.data)) {
        setResult(response.data.map((item) => item.generated_text).join('\n'));
      } else {
        setResult(response.data.error || 'Unexpected response format');
      }
    } catch (error) {
      console.error('Failed to generate content:', error);
      setResult('Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
      setText('');
    }
  };

  const predefinedQuestions = [
    'How can I improve my email writing skills?',
    'What are the best practices for lifelong learning?',
    "How can I overcome writer's block for my blog?",
    "What's the latest news on technological advancements?",
  ];

  return (
    <RootLayout>
      <div className='bg-dark min-h-screen text-white p-4 m-6  text-base md:text-lg space-y-8'>
        <SectionHeading mainText='How can I help you today?' />
        <div className='mb-4'>
          {/* <label className='block mb-2'>Or choose a predefined question:</label> */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => generateText(question)}
                className='bg-gray-700 hover:bg-gray-600 transition duration-300 text-grayPrimary p-2 rounded-xl text-left'
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <div className='mt-12 mb-2'>
          {/* <label htmlFor='input' className='block mb-2'>
            Ask here...
          </label> */}
          <textarea
            id='input'
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='w-full bg-gray-700 p-2 rounded-xl'
            placeholder='Message MindScribe...'
          />

          <Button
            label={loading ? '🕒' : 'Go'}
            onClick={() => generateText()}
            disabled={loading}
            variant='primary'
            size='sm'
          ></Button>
        </div>

        <div>
          {/* <label className='block mb-2'>Generated Content:</label> */}
          <div className='bg-gray-700 p-4 rounded-xl'>
            {result || 'Your generated content will appear here...'}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default MyAi;
