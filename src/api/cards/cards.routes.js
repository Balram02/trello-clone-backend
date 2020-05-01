var Cards = require('./card.controller');

module.exports = function(router) {
    router.post('/create', Cards.createCard);
    router.get('/get', Cards.getCards);
    router.get('/get/:id', Cards.getCard);
    router.put('/update/:id', Cards.updateCard);
    router.delete('/remove/:id', Cards.removeCard);
}