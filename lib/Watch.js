function Watch() {
  this.bodyPart = -1;
}

Watch.prototype.wear = function(bodyPart) {
  this.bodyPart = bodyPart;
}

module.exports = Watch;