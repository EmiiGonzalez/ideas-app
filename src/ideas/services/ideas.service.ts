import { Injectable } from '@nestjs/common';

@Injectable()
export class IdeasService {
    getHello(): string {
        return 'Hello World!';
    }
}
