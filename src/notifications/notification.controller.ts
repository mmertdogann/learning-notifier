import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api/v1/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getCurrentLecturer() {
    return this.notificationService.getCurrentLecturer();
  }

  @Post()
  addLecturer(
    @Body('name') lecturerName: string,
    @Body('isCurrentLecturer') isCurrentLecturer: boolean,
    @Body('date') date: string,
  ) {
    return this.notificationService.addLecturer(
      lecturerName,
      isCurrentLecturer,
      date,
    );
  }

  @Patch(':id')
  updateLecturer(
    @Param('id') lecturerId: string,
    @Body('isCurrentLecturer') isCurrentLecturer: boolean,
  ) {
    this.notificationService.updateLecturer(lecturerId, isCurrentLecturer);
  }
}
