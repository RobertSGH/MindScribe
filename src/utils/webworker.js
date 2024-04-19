import { pipeline, env } from '@xenova/transformers';

env.allowLocalModels = false;

class PipelineSingleton {
  static task = 'text2text-generation';
  static model = 'Xenova/LaMini-Flan-T5-783M';
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = await pipeline(this.task, this.model, {
        progress_callback,
      });
    }
    return this.instance;
  }
}

self.addEventListener('message', async (event) => {
  let generator = await PipelineSingleton.getInstance((progress) => {
    self.postMessage({ status: 'progress', progress: progress * 100 });
  });
  console.log('Text generation started with input:', event.data.text);

  // Simulating text generation
  let output = await generator(event.data.text, {
    max_new_tokens: 800,
    temperature: 0.9,
    repetition_penalty: 2.0,
    no_repeat_ngram_size: 3,
  });
  console.log('Generated output:', output);

  // Post the completion message with generated text
  self.postMessage({
    status: 'complete',
    output: {
      generated_text: output,
    },
  });
});
