import { Injectable } from '@nestjs/common';
import { Speaker } from './interfaces/speaker.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SpeakerService {
  private speakers: Speaker[] = [];

  //TODO Current date çekilip month ve yearına göre query atılacak
  //TODO DB bağla
  //Couchbase
  getCurrentSpeaker = () => {
    return this.speakers.filter(
      (speaker) => speaker.isPresentationOver == false,
    );
  };

  getSpeakers = () => {
    return this.speakers;
  };

  addSpeaker = (speaker: Speaker) => {
    speaker.id = uuid();
    this.speakers.push(speaker);
    return speaker;
  };

  //TODO getCurrentSpeaker ile call edip isPresentationOver true set edip dbye yazacağım
  setPresentationOver = () => {
    const currentSpeaker = this.getCurrentSpeaker();
    currentSpeaker.map((speaker) => (speaker.isPresentationOver = true));
    return 'The current speaker has presented his/her topic';
  };
}
