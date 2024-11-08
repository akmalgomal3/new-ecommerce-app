import { Injectable } from '@nestjs/common';
import { esClient } from '../elasticsearch/elasticsearch.module';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  async logRequest(method: string, endpoint: string, status: number) {
    await esClient.index({
      index: 'api-logs',
      body: {
        id: uuidv4(),
        timestamp: new Date().toISOString(),
        method,
        endpoint,
        status,
      },
    });
  }
}
