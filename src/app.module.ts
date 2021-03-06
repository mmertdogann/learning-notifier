import { Module } from '@nestjs/common';
import { SpeakerModule } from './speakers/speakers.module';

@Module({
  imports: [SpeakerModule],
})
export class AppModule {}
