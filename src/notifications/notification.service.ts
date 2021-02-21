import { Injectable } from '@nestjs/common';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private notifications: Notification[] = [];

  getCurrentLecturer() {
    return this.notifications.filter(
      (notification) => notification.isCurrentLecturer,
    );
  }

  addLecturer(name: string, isCurrentLecturer: boolean, date: string) {
    const lecturerId = Math.random().toString();
    const newLecturer = new Notification(
      lecturerId,
      name,
      isCurrentLecturer,
      date,
    );
    this.notifications.push(newLecturer);
    return lecturerId;
  }

  updateLecturer(lecturerId: string, isCurrentLecturer: boolean) {
    const updatedProduct = this.notifications
      .filter((notification) => notification.id === lecturerId)
      .map((notif) => (notif.isCurrentLecturer = true));
  }
}
