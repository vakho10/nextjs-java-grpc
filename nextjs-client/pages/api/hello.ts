// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { credentials } from 'grpc';
import services from '../../src/proto/helloworld_grpc_pb';
import { HelloRequest } from '../../src/proto/helloworld_pb';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestJson = JSON.parse(req.body);

  const helloRequest = new HelloRequest();
  helloRequest.setName(requestJson.name);

  const client = new services.GreeterClient("localhost:50051", credentials.createInsecure());

  try {
    const response = await new Promise<string>((resolve, reject) => {
      client.sayHello(helloRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getMessage());
        }
      });
    });
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).send(error);
  }
}
