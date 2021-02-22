export class Notification {
  //TODO Yeni bir Person classı veya objesi oluşturulabilir. Notificationdaki name ve isCurrentLecturer
  //TODO oraya aktarılabilir. Notificationa lecturerId geçilebilir ve Persondaki id ile one to one relation kurulabilir
  //TODO bu ay içerisinde miyiz ve isCurentLecturer true mu o zaman notification gönder.
  //TODO bir tane cron job olsun aydan aya çalışsın o ay içerisinde olan personu bulup isCurrentLecturer true set etsin
  //TODO o ayın sorumlusu anlattığı zaman patch request üzerinden isCurrentLecturer false set etsin.
  //TODO aynı ayın içerisinde fakat isCurrentLecturer false olduğu için artık o ayın sonuna kadar notif gönderilmesin
  constructor(
    public id: string,
    public speaker: string,
    public isCurrentSpeaker: boolean,
    public date: string, //TODO Date e çevirilecek
  ) {}
}
