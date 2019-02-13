// StopWatch --> duration, reset, start, stop
// duration = 0
// start una vez, no se puede volver a inicializar
// stop si esta inicializado solamente
// reset resetea el contador
function StopWatch() {
  let startTime, endTime, running, duration = 0;
  this.start = function () {
    if (!running) {
      running = true;
      startTime = new Date();
    } else {
      throw new Error('Stopwatch has already started');
    }
  };
  this.stop = function () {
    if (!running) {
      throw new Error('Stopwatch is not started');
    } else {
      running = false;
      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    }
  }
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    }
  });
}