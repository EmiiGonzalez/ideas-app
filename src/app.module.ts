import { Module } from '@nestjs/common';
import { IdeasModule } from './ideas/ideas.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
        isGlobal: true,
      }
    ),
    TypeOrmModule.forRoot({...DataSourceConfig}),
    IdeasModule, AuthModule, UsersModule, TagsModule,],
})
export class AppModule {}
