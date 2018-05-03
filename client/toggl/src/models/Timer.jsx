import {decorate, observable} from 'mobx';

class Timer {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.counting = false;
    this.totalSeconds = 0;
  }
}

decorate(Timer, {
  hours: observable,
  minutes: observable,
  seconds: observable,
  counting: observable,
  totalSeconds: observable
});

export default Timer;
