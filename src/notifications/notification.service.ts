import { Injectable } from '@nestjs/common';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private notifications: Notification[] = [];

  getCurrentSpeaker = () => {
    return this.notifications.filter(
      (notification) => notification.isCurrentSpeaker,
    );
  };

  getSpeakers = () => {
    return this.notifications.map((notification) => notification.speaker);
  };

  addSpeaker = (
    speakerName: string,
    isCurrentSpeaker: boolean,
    date: string,
  ) => {
    const speakerId = Math.random().toString();
    const newSpeaker = new Notification(
      speakerId,
      speakerName,
      isCurrentSpeaker,
      date,
    );
    this.notifications.push(newSpeaker);
    return speakerId;
  };

  updateSpeaker = (speakerId: string) => {
    this.notifications
      .filter((notification) => notification.isCurrentSpeaker)
      .map((notif) => (notif.isCurrentSpeaker = false));

    const updatedProduct = this.notifications
      .filter((notification) => notification.id === speakerId)
      .map((notif) => (notif.isCurrentSpeaker = true));

    return updatedProduct;
  };
}
