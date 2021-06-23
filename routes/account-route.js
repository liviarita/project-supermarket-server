const AccountController = require('../controllers/account-controller');

module.exports = {
    start: (app) => {
        app.get('/listsupermarkets', AccountController.listAllSupermarkets);
        app.get('/supermarket/:id', AccountController.listSupermarketById);
        app.post('/createsupermarket', AccountController.createSupermarket);
        app.put('/updatesupermarket', AccountController.updateSupermarket);
        app.delete('/deletesupermarket', AccountController.deleteSupermarket);
    }
};