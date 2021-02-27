import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api/v1/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getCurrentSpeaker() {
    return this.notificationService.getCurrentSpeaker();
  }

  @Get('/speakers')
  getSpeakers() {
    return this.notificationService.getSpeakers();
  }

  @Post()
  addSpeaker(
    @Body('name') speakerName: string,
    @Body('isCurrentSpeaker') isCurrentSpeaker: boolean,
    @Body('date') date: string,
  ) {
    return this.notificationService.addSpeaker(
      speakerName,
      isCurrentSpeaker,
      date,
    );
  }

  @Patch(':id')
  updateSpeaker(@Param('id') speakerId: string) {
    this.notificationService.updateSpeaker(speakerId);
  }
}
