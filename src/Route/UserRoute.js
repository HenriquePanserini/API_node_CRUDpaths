const UserController = require('../Controller/UserController');
module.exports = (app) => {
    app.post('/User', UserController.post);
    app.put('/User/:id', UserController.put);
    app.delete('/User/:id', UserController.delete);
    app.get('/User', UserController.get);
    app.get('/User/:id', UserController.getById);
}