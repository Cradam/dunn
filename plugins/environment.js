/*
 * @Plugin        Environment
 * @Description   Contains all triggers related to DunnBot's environment
 * @Trigger       .triggers, .plugins
 *
 * @Author        #webtech
 * @Copyright     DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2 http://sam.zoy.org/wtfpl/COPYING
 *
 */

Plugin = exports.Plugin = function (irc) {
  irc.addTrigger('plugins', this.plugins);
  irc.addTrigger('triggers', this.triggers);
};

Plugin.prototype.plugins = function (irc, channel, nick, params, message, raw) {
  var plugins = [];
  for (var plugin in irc.plugins) {
    plugins.push(plugin);
  }
  irc.send(channel, nick + ': Loaded plugins are: ' + plugins.join(', ') + '.');
};

Plugin.prototype.triggers = function (irc, channel, nick, params, message, raw) {
  var trggrs = [];
  for (var trig in irc.triggers) {
    trggrs.push(trig);
  }
  irc.send(channel, nick + ': Loaded triggers are: ' + trggrs.join(', ') + '.');
};
