function Tablet() {

}
Tablet.prototype.touch = function(x, y){
  var module = {
    x : x,
    y : y
  }
  return module;
}


module.exports = Tablet;