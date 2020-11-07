'use strict';

class Frame{

  constructor(){
    this.contents = [];
  };

  recordRoll(pins){
    this.contents.push(pins)
  };

  rolls(){
    return this.contents.length
  }

  points(nextRoll = 0, nextNextRoll = 0){
    this._applySpare(nextRoll);
    this._applyStrike(nextRoll, nextNextRoll);
    return this.contents.reduce((a, b) => a + b, 0);
  };

  isStrike(){
    if (this.contents.length === 1 && this._rawScore() === 10){
      return true;
    } else {
      return false;
    }
  };

  isSpare(){
    if (this.contents.length === 2 && this._rawScore() === 10){
      return true;
    } else {
      return false;
    }
  };

  _applySpare(nextRoll){
    if (this.isSpare() && nextRoll > 0) {
      this.contents[1] += nextRoll;
      console.log(this.contents[1])
    };
  };

  _applyStrike(nextRoll, nextNextRoll){
    if (this.isStrike() && nextRoll > 0 && nextNextRoll > 0) {
      this.contents[0] += nextRoll + nextNextRoll;
      console.log(this.contents[0])
    }
    else if (this.isStrike() && nextRoll > 0) {
      this.contents[0] += nextRoll
      console.log(this.contents[0]);
    };
  };

  _rawScore(){
    return this.contents.reduce((a, b) => a + b, 0);
  }

}
