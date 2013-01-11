var config = {
	host: 'irc.freenode.net',
	port: 6667,
	nick: 'dunnCradam',
	identPass: 'youridpasshere',
	username: 'dunnCradam',
	realname: 'Powered by #webtech',
	command: '.',
	db: 'dunnBot',
	channels: ['#dunnbot'],
	plugins: ['dunn', 'example', 'karma', 'log', 'nsfw', 'triggers', 'rage', 'seen', 'remind'],
	admins: ['Cradam']
};

module.exports = config;
