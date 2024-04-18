import { pipeline } from '@xenova/transformers';

// Use the Singleton pattern to enable lazy construction of the pipeline.
// NOTE: We wrap the class in a function to prevent code duplication (see below).
const PipelineSingleton = (() => {
  let instance = null; // Move instance inside the function to utilize closure

  async function getInstance() {
    if (instance === null) {
      instance = await pipeline(
        'text2text-generation',
        'Xenova/LaMini-Flan-T5-783M'
      );
    }
    return instance;
  }

  return {
    // This method now directly uses the instance to perform the operation with dynamic parameters
    async generate(
      text,
      generationParams = {
        max_new_tokens: 800,
        temperature: 0.9,
        repetition_penalty: 2.0,
        no_repeat_ngram_size: 3,
      }
    ) {
      const pipelineInstance = await getInstance();
      return pipelineInstance(text, generationParams);
    },
  };
})();

export default PipelineSingleton;
