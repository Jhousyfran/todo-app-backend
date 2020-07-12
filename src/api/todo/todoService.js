const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Tudo.updateOptions({ new: true, runValidators: true })

module.exports = Todo