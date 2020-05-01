const Cards = require('../../schemas/card');

exports.createCard = (req, res, next) => {
  console.log('create cards called')
  const card = {
    name: req.body.name,
    description: req.body.description
  }
  console.log(`card req object ${JSON.stringify(req.body)}`)
  Cards.create(card, (err, card) =>{
    if(err){
      res.json({ error: err})
    } else {
      res.json({ msg:'card created sucessfully'});
    }
  })
}

exports.getCards = (req, res, next) => {
  console.log('get cards called')
  Cards.get({}, (err, cards) =>{
    if(err){
      res.json({ error: err});
    } else {
      res.json(cards);
    }
  })
}

exports.getCard = (req, res, next) => {
  console.log('get card called')
  console.log(req.params.id)
  Cards.getByName({_id: req.params.id}, (err, cards) =>{
    if(err){
      res.json({ error: err});
    } else {
      res.json(cards);
    }
  })
}

exports.updateCard = (req, res, next) => {
  console.log('update cards called')
  const card = {
    name: req.body.name,
    description: req.body.description
  }
  Cards.update({_id: req.params.id}, card, (err, cards) =>{
    if(err){
      res.json({ error: err});
    } else {
      res.json({msg: `card successfully updated with value ${card}`});
    }
  })
}

exports.removeCard = (req, res, next) => {
  console.log('delete cards called')
  Cards.delete({ _id:req.params.id }, (err, card) => {
    if(err){
      res.json({error:err})
    } else {
      res.json({msg: `card ${card} deleted successfully `})
    }
  })
}
