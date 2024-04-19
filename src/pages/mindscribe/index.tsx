'use client';
import Button from '@/ui/Button';
import RootLayout from '@/ui/Layout';
import { useRef, useState, useEffect, useCallback } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { MutableRefObject } from 'react';

const MyAi = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const worker: MutableRefObject<Worker | null> = useRef<Worker | null>(null);

  useEffect(() => {
    const newWorker = new Worker(
      new URL('../../utils/webworker.js', import.meta.url),
      { type: 'module' }
    );
    worker.current = newWorker;

    const onMessageReceived = (e: MessageEvent) => {
      console.log('Message from worker:', e.data);
      switch (e.data.status) {
        case 'progress':
          console.log(`Loading model: ${e.data.progress}%`);
          break;
        case 'done':
          console.log(`Component loaded: ${e.data.file}`);
          break;
        case 'complete':
          if (
            e.data.output &&
            Array.isArray(e.data.output.generated_text) &&
            e.data.output.generated_text.length > 0
          ) {
            setResult(e.data.output.generated_text[0].generated_text);
          } else {
            console.error('Invalid or missing generated text:', e.data);
            setResult('Error: Invalid or missing generated text.');
          }
          setLoading(false);
          setText('');
          break;
        default:
          console.error('Received unknown status:', e.data);
          setResult(`Error: Unknown status ${e.data.status} received.`);
          setLoading(false);
          setText('');
      }
    };

    worker.current.addEventListener('message', onMessageReceived);

    return () => {
      if (worker.current) {
        worker.current.removeEventListener('message', onMessageReceived);
        worker.current.terminate(); // Optionally terminate the worker if it's no longer needed
      }
    };
  }, []);

  const generateText = useCallback(
    (input: string = text) => {
      if (!input) return;

      setLoading(true);
      setText(input);
      if (worker.current) {
        worker.current.postMessage({ text: input });
      }
    },
    [text]
  );
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
            label='Go'
            onClick={() => generateText()}
            disabled={loading}
            variant='primary'
            size='sm'
            isLoading={loading}
          />
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
