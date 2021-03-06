const router = require('express').Router();
const { User, Activity, Eat, Entertain } = require('../models');

//CRUD APPLICATION ROUTES BELOW
// GET all users
router.get('/users', (req, res) => {
  //query want to do when want all users
  User.findAll()
    //will return users that res.json to frontend
    .then(users => res.json(users))
    .catch(err => console.error(err))
});

// GET one user based on their uniqueID
router.get('/users/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Activity, Eat, Entertain] })
    .then(user => res.json(user))
    .catch(err => console.error(err))
});

// GET user's eat card's based on their unique id
router.get('/users/:id', (req, res) => {
  User.findOne({ id: req.params.id, include: [Eat] })
    .then(user => res.json(user))
    .catch(err => console.error(err))
});

// GET user's entertain card's based on their unique id
router.get('/users/:id', (req, res) => {
  User.findOne({ id: req.params.id, include: [Entertain] })
    .then(user => res.json(user))
    .catch(err => console.error(err))
});

// ADD one user
router.post('/users', (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch(err => console.error(err))
});

// Update one user based on unique id
router.put('/users/:id', (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
});

// DELETE one user
router.delete('/users/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
});

//export router out
module.exports = router