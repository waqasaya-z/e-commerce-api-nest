import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'waqasayaz',
  password: 'admin123',
  database: 'ecommerce-store',
  entities: ['dist/**/*.entity.ts'],
  migrations: ['dist/migrations/**/*.ts'],
});
