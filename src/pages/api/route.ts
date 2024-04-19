// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';
// import PipelineSingleton from '../../utils/webworker';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   const { text } = req.body;

//   if (!text) {
//     return res.status(400).json({ error: 'Missing text parameter' });
//   }

//   try {
//     const result = await PipelineSingleton.generate(text);
//     res.status(200).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to process the request' });
//   }
// }
