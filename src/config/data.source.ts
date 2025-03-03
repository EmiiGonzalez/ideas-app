import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSourceOptions, DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies/snake-naming.strategy';

ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
});

const configService = new ConfigService();

export const DataSourceConfig : DataSourceOptions = {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT'), 10), 
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [__dirname + '/../**/**/*.entity{.ts,.js}'], 
    migrations: [__dirname + '/../migrations/*{.ts,.js}'], 
    synchronize: false,
    migrationsRun: true,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
}

export const AppDS = new DataSource(DataSourceConfig);
