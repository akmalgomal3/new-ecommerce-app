import { Client } from '@elastic/elasticsearch';
import { config } from 'dotenv';

config();

export const esClient = new Client({
  node: process.env.ELASTICSEARCH_URL,
});
