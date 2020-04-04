class HandDetect {
  constructor() {
    this.strokeStyle = '#ff0000';
    this.lineWidth = 5;
    this.callbackList = [];
    this.modelParams = {
      flipHorizontal: true, // flip e.g for video 
      imageScaleFactor: 0.8, // reduce input image size .
      maxNumBoxes: 20, // maximum number of boxes to detect
      iouThreshold: 0.5, // ioU threshold for non-max suppression
      scoreThreshold: 0.9, // confidence threshold for predictions.
    }
  }

  setCamera(cam) {
    this.cam = cam;
  }

  setRectStyle(color, lineWidth) {
    this.strokeStyle = color;
    this.lineWidth = lineWidth;
  }

  on(callback) {
    this.callbackList.push(callback);
  }

  start(color, lineWidth) {
    handTrack.load(this.modelParams).then(model => {
      var self = this;
      var cnt = 0;
      self.cam.onCanvas(function (canvas) {
        if (cnt++ % 3 != 0) return;
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        model.detect(canvas).then(predictions => {
          var hands = [];
          var amt = predictions.length;
          for (var i = 0; i < amt; i++) {
            var hand = predictions[i]['bbox'];
            hand.push(predictions[i]['score']);
            hands.push(hand);
            //flip
            hand[0] = canvas.width - (hand[0] + hand[2]);
            ctx.rect(hand[0], hand[1], hand[2], hand[3]);
            // process callback
            for (var i = 0; i < self.callbackList.length; i++) {
              self.handInfo = hand;
              self.callbackList[i](hand);
            }
          }
          ctx.stroke();
        });
      });
    });
  }
}