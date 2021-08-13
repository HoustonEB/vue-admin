var path = require('path')

var config = {
    root: path.normalize(__dirname + '../../../'),
    path: {}
}
config.path.src = path.resolve(config.root + '/src/')
config.path.public = path.resolve(config.root + '/public/')
config.path.dist = path.resolve(config.root + '/dist/')

module.exports = config