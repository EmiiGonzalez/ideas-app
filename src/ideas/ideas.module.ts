import { Module } from "@nestjs/common";
import { IdeasController } from "./controllers/ideas.controller";
import { IdeasService } from './services/ideas.service';

@Module({
    controllers: [IdeasController],
    providers: [IdeasService],
})
export class IdeasModule {} 