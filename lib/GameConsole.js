function GameConsole(systemName) {
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game) {
  var game = {
    title : 'Shynobie'
  }
  return this.systemName + ' plays ' + game.title;
}


module.exports = GameConsole;