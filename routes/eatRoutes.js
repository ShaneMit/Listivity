const router = require('express').Router()
const { User, Activity, Eat, Entertain } = require('../models')

//CRUD APPLICATION ROUTES BELOW
// GET all activities
router.get('/eats', (req, res) => {
  //query want to do when want all eats
  Eat.findAll()
    .then(eats => res.json(eats))
    .catch(err => console.error(err))
})

router.get('/eats/:id', (req, res) => {
  Eat.findOne({ id: req.params.id })
    .then(eat => res.json(eat))
    .catch(err => console.error(err))
})

router.post('/eats', (req, res) => {
  Eat.create(req.body)
    .then((eat) => res.json(eat))
    .catch(err => console.error(err))
})

router.put('/eats/:id', (req, res) => {
  Eat.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one user
router.delete('/eats/:id', (req, res) => {
  Eat.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

//export router out
module.exports = router