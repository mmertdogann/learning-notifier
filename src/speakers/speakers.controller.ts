import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SpeakerDto } from './dto/speaker.dto';
import { SpeakerService } from './speakers.service';
import { Speaker } from './interfaces/speaker.interface';

@Controller('api/v1/speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}

  @Get()
  getSpeakers() {
    return this.speakerService.getSpeakers();
  }

  @Get('/current')
  getCurrentSpeaker() {
    return this.speakerService.getCurrentSpeaker();
  }

  @Post()
  addSpeaker(@Body() speakerDTO: SpeakerDto): Speaker {
    return this.speakerService.addSpeaker(speakerDTO);
  }

  @Put()
  setPresentationOver() {
    return this.speakerService.setPresentationOver();
  }
}
