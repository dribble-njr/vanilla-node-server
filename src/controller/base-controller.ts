import { Response } from '../types';
import { ServerResponse } from 'node:http';

export abstract class BaseController {
  protected static sendResponse(statusCode: number, data: unknown, res: ServerResponse, message: string = 'success') {
    res.setHeader('content-type', 'application/json');
    res.writeHead(statusCode);

    // handle bigint
    let responseData: unknown;
    if (typeof data === 'bigint') {
      if (data <= Number.MAX_SAFE_INTEGER && data >= Number.MIN_SAFE_INTEGER) {
        responseData = Number(data);
      } else {
        responseData = data.toString();
      }
    } else {
      responseData = data;
    }

    const response: Response = {
      code: statusCode,
      message,
      data: responseData
    };

    res.write(JSON.stringify(response));
    res.end();
  }

  protected static sendError(statusCode: number, message: string, res: ServerResponse) {
    res.setHeader('content-type', 'application/json');
    res.writeHead(statusCode);

    const response: Response = {
      code: statusCode,
      message,
      data: null
    };

    res.write(JSON.stringify(response));
    res.end();
  }
}
