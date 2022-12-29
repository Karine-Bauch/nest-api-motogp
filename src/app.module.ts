import { Module } from '@nestjs/common';
import { RidersModule } from './rider/rider.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from './rider/entity/rider.entity';
import { AuthModule } from './auth/auth.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    RidersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [Rider],
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
