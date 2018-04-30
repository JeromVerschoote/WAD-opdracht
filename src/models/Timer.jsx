import {decorate, observable, action} from 'mobx';

class Timer {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.counting = false;
    this.totalSeconds = 0;
  }

  toggleState = () => {
    if(!this.counting){
      this.intervalId = setInterval(this.tick, 1000);
    }else if(this.counting){
      clearInterval(this.intervalId);
    }
    this.counting = !this.counting;
  }

  tick = () => {
    this.seconds += 1;
    this.totalSeconds += 1;

    if(this.seconds >= 59){
      this.minutes += 1;
      this.seconds = 0;

      if(this.minutes >= 59){
        this.hours += 1;
        this.minutes = 0;
      }
    }
  }
}

decorate(Timer, {
  hours: observable,
  minutes: observable,
  seconds: observable,
  counting: observable,
  totalSeconds: observable,
  start: action,
  pause: action,
  tick: action
});

export default Timer;
