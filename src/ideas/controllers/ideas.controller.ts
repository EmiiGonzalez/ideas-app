import { Controller, Get } from "@nestjs/common";
import { IdeasService } from "../services/ideas.service";

@Controller({})
export class IdeasController {

    constructor(
        private readonly ideasService: IdeasService
    ) {}

    @Get('/ideas')
    getAllIdeas() {
        return this.ideasService.getHello();
    }
}