import { Module } from '@nestjs/common';

import { SpeakerController } from './speakers.controller';
import { SpeakerService } from './speakers.service';

@Module({
  controllers: [SpeakerController],
  providers: [SpeakerService],
})
export class SpeakerModule {}
