import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'arihant',
  database: 'taskmanagement',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
