const router = require('express').Router();
const { User, Activity, Eat, Entertain } = require('../models');

//CRUD APPLICATION ROUTES BELOW
// GET all activities
router.get('/entertains', (req, res) => {
  //query want to do when want all entertains
  Entertain.findAll()
    .then(entertains => res.json(entertains))
    .catch(err => console.error(err))
});

// GET entertain activities based on user's uniqueId 
router.get('/entertains/:id', (req, res) => {
  Entertain.findOne({ id: req.params.id })
    .then(entertain => res.json(entertain))
    .catch(err => console.error(err))
});

// ADD an entertain activity
router.post('/entertains', (req, res) => {
  Entertain.create(req.body)
    .then((entertain) => res.json(entertain))
    .catch(err => console.error(err))
});

// EDIT an entertain activity in a user's database
router.put('/entertains/:id', (req, res) => {
  Entertain.update(req.body, { where: { id: req.params.id } })
    .then((data) => res.json(data))
    .catch(err => console.error(err))
});

// DELETE one entertain activity
router.delete('/entertains/:id', (req, res) => {
  Entertain.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
});

//export router out
module.exports = router