function GameConsole(sN) {
  this.systemName = sN;
}

GameConsole.prototype.play = function(game) {

  return this.systemName + ' plays ' + game.title;
}


module.exports = GameConsole;