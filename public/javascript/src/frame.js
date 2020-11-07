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

  points(){
    return this.contents.reduce((a, b) => a + b, 0);
  };

  isStrike(){
    if (this.contents.length === 1 && this.points() === 10){
      return true;
    } else {
      return false;
    }
  };

  isSpare(){
    if (this.contents.length === 2 && this.points() === 10){
      return true;
    } else {
      return false;
    }
  };

}
