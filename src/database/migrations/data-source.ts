import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { join } from 'path';

dotenv.config();

export default new DataSource({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5431'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '../../**/*.entity.{ts,js}')],
  migrations: [join(__dirname, './*.{ts,js}')],
});
